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

  // SENDS LOGIN REQUEST TO BACK END WITH EMAIL AND PASSWORD
  // SETS TOKEN STATE AND LOCAL STORAGE TO RETURNED TOKEN
  // SETS USER STATE AND LOCAL STORAGE TO RETURNED USER
  // REDIRECTS TO HOME
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
    <div className="flex flex-col items-center mt-8 text-center">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">
        Have an account with us?
      </h3>
      <form
        onSubmit={formHandler}
        className="flex flex-col mt-4 text-left w-80"
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
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>
        <button
          type="submit"
          className="py-2 text-xl text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Log In
        </button>
      </form>
      <div className="mt-6">
        <p className="text-gray-700">or</p>
        <Link href="/SignUp" className="text-lg text-blue-600 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
