"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    tokenHandler,
    loginTokenHandler,
    userHandler,
    logInHandler,
    isLoggedIn,
  } = useContext(UserContext);

  const formHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://coffee-shop-backend-express-server.onrender.com/login`,
      { email, password }
    );
    loginTokenHandler(response.data.token);
    userHandler(response.data.user);
    logInHandler();
    console.log(isLoggedIn);
    router.push("/");
  };
  return (
    <div className="flex-col flex items-center mt-12 text-center">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Have an account with us?
      </h3>
      <form
        onSubmit={formHandler}
        className="flex flex-col text-left mt-4 w-80"
      >
        <label className="mb-2 text-gray-700">
          Email:
          <input
            value={email}
            type="text"
            name="logInEmail"
            id="logInEmail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mt-1"
          />
        </label>
        <label className="mb-4 text-gray-700">
          Password:
          <input
            value={password}
            type="password"
            name="password"
            id="logInPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mt-1"
          />
        </label>
        <button
          type="submit"
          className="text-xl bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Log In
        </button>
      </form>
      <div className="mt-6">
        <p className="text-gray-700">or</p>
        <Link href="/SignUp" className="text-lg text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
