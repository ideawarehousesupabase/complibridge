import "../_libs/firebase.mjs";
import { b as getFirestore, a as addDoc, c as collection, q as query, w as where, g as getDocs } from "../_libs/firebase__firestore.mjs";
import { i as initializeApp } from "../_libs/firebase__app.mjs";
const config = {
  apiKey: "AIzaSyCJDwpTB_8O30OxD0o3x6E5lAKnnMJu1WY",
  authDomain: "complibridge-107de.firebaseapp.com",
  projectId: "complibridge-107de",
  storageBucket: "complibridge-107de.firebasestorage.app",
  messagingSenderId: "976759889501",
  appId: "1:976759889501:web:a62bbf11020047ba6037b4"
};
let app = null;
let db = null;
const firebaseEnabled = Boolean(config.apiKey && config.projectId);
if (firebaseEnabled) {
  try {
    app = initializeApp(config);
    db = getFirestore(app);
  } catch (e) {
    console.warn("Firebase init failed, falling back to localStorage", e);
  }
}
const LS_KEY = "complibridge_users";
function lsGetAll() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  } catch {
    return [];
  }
}
function lsSaveAll(u) {
  localStorage.setItem(LS_KEY, JSON.stringify(u));
}
async function createUser(user) {
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
async function findUserByEmail(email) {
  if (db) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() };
  }
  return lsGetAll().find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null;
}
async function loginUser(email, password) {
  const user = await findUserByEmail(email);
  if (!user || user.password !== password) throw new Error("Invalid email or password.");
  return user;
}
export {
  createUser as c,
  loginUser as l
};
