import { User, UserForm } from "common/interface";
import { createContext, ReactElement, useContext, useState } from "react";
import * as auth from "api/auth-provider";

const AuthContext = createContext<{
  user: User | null;
  login: (form: UserForm) => Promise<void>;
  register: (form: UserForm) => Promise<void>;
  logout: () => Promise<void>;
} | null>(null);

AuthContext.displayName = "AuthContext";

export default function AuthProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: UserForm) => auth.login(form).then(setUser);
  const register = (form: UserForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    ></AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("useAuth必须在AuthProvider中使用");
};
