"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const data = localStorage.getItem("token");
    return data ? JSON.parse(data) : "";
  });
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      setToken(JSON.parse(data));
    }
  }, []);

  const tokenHandler = async () => {
    if (token) {
      const response = await axios.post(
        "https://coffee-shop-backend-express-server.onrender.com/users/refresh",
        token
      );
      setToken(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log(response.data);
    }
  };

  const loginTokenHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const [user, setUser] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : {};
  });

  const userHandler = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const data = localStorage.getItem("loggedIn");
    return data ? JSON.parse(data) : false;
  });
  useEffect(() => {
    const data = localStorage.getItem("loggedIn");
    setLoggedIn(JSON.parse(data));
  }, []);
  const logInHandler = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", true);
  };
  const logOut = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
    setToken([]);
    localStorage.setItem("token", "");
    setUser({});
    localStorage.removeItem("user");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        userHandler,
        token,
        tokenHandler,
        loginTokenHandler,
        logInHandler,
        isLoggedIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
