"use client";
import { UserContext } from "@/app/context/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export default function SignUp() {
  const { isLoggedIn, logInHandler, loginTokenHandler, userHandler } =
    useContext(UserContext);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await axios.post(
        "https://coffee-shop-backend-express-server.onrender.com/register",
        { name, email, password, role }
      );

      if (registerResponse.status === 201) {
        // Assuming 201 Created status
        const logInResponse = await axios.post(
          "https://coffee-shop-backend-express-server.onrender.com/login",
          { email, password }
        );

        loginTokenHandler(logInResponse.data.token);
        userHandler(logInResponse.data.user);
        logInHandler();
        console.log(isLoggedIn);

        router.push("/");
      }
    } catch (error) {
      console.error("An error occurred during registration or login:", error);
      // Handle error (e.g., show error message to user)
    }
  };
  return (
    <div className="flex flex-col items-center text-center">
      <form
        onSubmit={formHandler}
        className="flex flex-col gap-8 mt-8 text-left w-80"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-800">
          Create Account
        </h3>
        <label className="text-gray-700">
          Your Name:
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>
        <label className="text-gray-700">
          Email:
          <input
            value={email}
            type="text"
            name="signUpEmail"
            id="SignUpEmail"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>
        <label className="text-gray-700">
          Password:
          <input
            value={password}
            type="password"
            name="signUpPassword"
            id="signUpPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 text-white transition duration-200 bg-blue-700 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
