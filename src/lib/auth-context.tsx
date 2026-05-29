import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { StoredUser } from "./firebase";

type SessionUser = Omit<StoredUser, "password">;
type AuthCtx = {
  user: SessionUser | null;
  setUser: (u: SessionUser | null) => void;
  logout: () => void;
};
const Ctx = createContext<AuthCtx>({ user: null, setUser: () => {}, logout: () => {} });
const SESSION_KEY = "complibridge_session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<SessionUser | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUserState(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const setUser = (u: SessionUser | null) => {
    setUserState(u);
    if (u) localStorage.setItem(SESSION_KEY, JSON.stringify(u));
    else localStorage.removeItem(SESSION_KEY);
  };

  return <Ctx.Provider value={{ user, setUser, logout: () => setUser(null) }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
