"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";
import axios from "axios";

export default function UserAuth() {

  return (
    <div>
      <Header />
      <LogInForm />
      <Footer />
    </div>
  );
}
