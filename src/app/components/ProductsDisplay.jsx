"use client";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { UserContext } from "../context/user";

export default function ProductsDisplay({}) {
  const { user, tokenHandler } = useContext(UserContext);
  const [items, setItems] = useState({ products: [] });

  // FETCHES ITEMS FROM BACK END ON PAGE LOAD,
  // AS WELL AS REFRESHES TOKEN IF LOGGED IN

  useEffect(() => {
    async function getProducts() {
      const request = await axios.get(
        `https://coffee-shop-backend-express-server.onrender.com/products`
      );
      console.log(request.data);
      setItems(request.data);
    }
    getProducts();
    if (user) {
      tokenHandler();
    }
  }, [user, tokenHandler]);

  return (
    // MAPS ITEMS STATE DISPLAYING ITEMS

    <div className="flex items-center justify-center w-[75%]">
      <div className="flex flex-col items-center justify-center pb-8 sm:flex-row sm:flex-wrap">
        {console.log(items)}
        {items.products?.map((item) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}
