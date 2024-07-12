"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";

import React, { useContext } from "react";
import Home from "./components/Home";

import CartDisplay from "./ShoppingCart/components/CartDisplay";
import { CartContext } from "./context/cart";

export default function Page() {
  const { setShow, show } = useContext(CartContext);
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
