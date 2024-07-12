"use client";
import React,{ createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  const [transaction, setTransaction] = useState(true);
  const toggleTransaction = () => {
    setTransaction(!transaction);
  };
  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  useEffect(() => {
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        show,
        transaction,
        toggleTransaction,
        setShow,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
