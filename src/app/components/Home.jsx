
import React,{ useContext } from "react";
import ProductsDisplay from "./ProductsDisplay";
import { UserContext } from "../context/user";

export default function Home() {
  const { user, isLoggedIn } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className=" text-xl ">
        Welcome{isLoggedIn ? ", " : ""}
        {user.name}
      </h2>
      <p className=" text-lg mt-2 mb-4">
        Find whats right for you here at Cafe
      </p>
      <ProductsDisplay />
    </div>
  );
}
