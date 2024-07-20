"use client";

import { CartContext } from "@/app/context/cart.jsx";
import CartItem from "./CartItem";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/context/user";
import Link from "next/link";

export default function CartDisplay({ showModal, toggle }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    transaction,
    toggleTransaction,
  } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  const [animationClass, setAnimationClass] = useState("");

  // SLIDE IN ANIMATION

  useEffect(() => {
    if (showModal) {
      setAnimationClass("modal-enter");
    } else {
      setAnimationClass("modal-exit");
    }
  }, [showModal]);

  return (
    <div
      className={`flex-col flex items-center fixed inset-0 left-1/2 bg-zinc-900 gap-8 p-10 text-white font-normal uppercase text-sm ${animationClass}`}
    >
      {showModal && transaction ? (
        <>
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="absolute right-16 top-10">
            <button
              className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-900 rounded hover:bg-blue-800 focus:outline-none focus:bg-gray-700"
              onClick={() => toggle(false)}
            >
              Close
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto text-center max-h-[90vh] pr-8 cart-scrollbar">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col items-center justify-between ">
              <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>

              {isLoggedIn ? (
                <button
                  className="px-4 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    clearCart();
                    toggleTransaction();
                  }}
                >
                  Checkout
                </button>
              ) : (
                <Link
                  className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  href={"/UserAuth"}
                >
                  Log In to Checkout
                </Link>
              )}
            </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )}
        </>
      ) : (
        showModal && (
          <>
            <p>Thanks for shopping with us</p>
            <button
              onClick={() => {
                toggleTransaction();
                toggle(false);
              }}
            >
              Continue
            </button>
          </>
        )
      )}
    </div>
  );
}
