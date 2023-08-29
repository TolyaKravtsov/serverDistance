import React, { createContext, useState } from "react";

import { Outlet } from "react-router-dom";

import { TOKEN } from "./api";
import { Header } from "./components/Header";

interface AuthContextType {
  token: string | null;
  setTokenContext: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  token: localStorage.getItem(TOKEN),
  setTokenContext: () => {},
});

export const App = () => {
  const token = localStorage.getItem(TOKEN);
  const [tokenContext, setTokenContext] = useState(token);

  return (
    <AuthContext.Provider value={{ token: tokenContext, setTokenContext }}>
      <Header />
      <Outlet />
    </AuthContext.Provider>
  );
};
