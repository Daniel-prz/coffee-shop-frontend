"use client";
import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";
import { UserContext } from "../context/user";
import { useRouter } from "next/navigation";

export default function UserAuth() {
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
        <LogInForm />
      </div>
      <Footer />
    </div>
  );
}
