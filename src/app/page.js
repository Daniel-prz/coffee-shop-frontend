"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";
import Splash from "./components/Splash";
import { CartProvider } from "./context/cart";

export default function Home() {
  useEffect(() => {
    async function API() {
      const response = await axios.get(
        "https://coffee-shop-backend-express-server.onrender.com"
      );
      console.log(response.data);
    }
    API();
  }, []);

  return (
    <CartProvider>
      <div className=" flex flex-col justify-between relative h-full min-h-[100vh] gap-8">
        <Header />
        <Splash />
        <Footer />
      </div>
    </CartProvider>
  );
}
