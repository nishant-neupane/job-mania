"use client";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    access_token: null,
    refresh_token: null,
    role: null,
    user_id: null,
    username: null,
  });

  useEffect(() => {
    const access_token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");
    const role = Cookies.get("role");
    const user_id = Cookies.get("user_id");
    const username = Cookies.get("username");

    if (access_token && refresh_token) {
      setAuth({
        access_token,
        refresh_token,
        role,
        user_id,
        username,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
