"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { useContext, useEffect } from "react";
import Home from "./components/Home";
import { CartContext } from "./context/cart";
import CartDisplay from "./ShoppingCart/components/CartDisplay";

export default function page() {
  const { setShow, show, cartItems } = useContext(CartContext);
  return (
    <>
      <div className=" flex flex-col justify-between relative h-full min-h-[100vh] gap-8">
        <div>
          <Header />
          <Home />
        </div>{" "}
        <Footer />
      </div>
      <CartDisplay showModal={show} toggle={setShow} />
    </>
  );
}
