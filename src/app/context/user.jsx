"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const data =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (data) {
      setToken(data);
    }
  }, []);

  const tokenHandler = async () => {
    if (token) {
      try {
        const response = await axios.post(
          "https://coffee-shop-backend-express-server.onrender.com/users/refresh",
          { token } // Ensuring the token is sent as an object
        );
        setToken(response.data);
        localStorage.setItem("token", JSON.stringify(response.data));
        console.log(response.data);
      } catch (error) {
        console.error("Error refreshing token:", error);
      }
    }
  };

  const loginTokenHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("user");
      if (data) {
        setUser(JSON.parse(data));
      }
    }
  }, []);
  const userHandler = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const [isLoggedIn, setLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("loggedIn");
      return data ? JSON.parse(data) : false;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("loggedIn");
      if (data !== null) {
        setLoggedIn(JSON.parse(data));
      }
    }
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
