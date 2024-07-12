"use client";
import React, { useContext, useEffect } from "react";
import SignUp from "./components/SignUp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserContext } from "../context/user";
import { useRouter } from "next/navigation";

export default function page() {
  const { isLoggedIn } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

  return (
    <div className=" flex flex-col justify-between relative h-full min-h-[100vh] gap-8">
      <div>
        <Header />
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}
