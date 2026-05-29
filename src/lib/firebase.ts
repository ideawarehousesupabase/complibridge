// Firebase used ONLY as a CRUD store for the users collection.
// No Firebase Auth, no OAuth. Configure via VITE_FIREBASE_* env vars.
// If Firebase is not configured, the app gracefully falls back to localStorage
// so the MVP remains usable for demo purposes.

import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  type Firestore,
} from "firebase/firestore";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export const firebaseEnabled = Boolean(config.apiKey && config.projectId);

if (firebaseEnabled) {
  try {
    app = initializeApp(config as Record<string, string>);
    db = getFirestore(app);
  } catch (e) {
    console.warn("Firebase init failed, falling back to localStorage", e);
  }
}

export type StoredUser = {
  id?: string;
  fullName: string;
  companyName: string;
  email: string;
  password: string;
  role: string;
};

const LS_KEY = "complibridge_users";

function lsGetAll(): StoredUser[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch { return []; }
}
function lsSaveAll(u: StoredUser[]) { localStorage.setItem(LS_KEY, JSON.stringify(u)); }

export async function createUser(user: StoredUser): Promise<StoredUser> {
  if (db) {
    const existing = await findUserByEmail(user.email);
    if (existing) throw new Error("An account with this email already exists.");
    const ref = await addDoc(collection(db, "users"), user);
    return { ...user, id: ref.id };
  }
  const users = lsGetAll();
  if (users.find((u) => u.email.toLowerCase() === user.email.toLowerCase())) {
    throw new Error("An account with this email already exists.");
  }
  const withId = { ...user, id: crypto.randomUUID() };
  users.push(withId);
  lsSaveAll(users);
  return withId;
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  if (db) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...(d.data() as Omit<StoredUser, "id">) };
  }
  return lsGetAll().find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}

export async function loginUser(email: string, password: string): Promise<StoredUser> {
  const user = await findUserByEmail(email);
  if (!user || user.password !== password) throw new Error("Invalid email or password.");
  return user;
}
