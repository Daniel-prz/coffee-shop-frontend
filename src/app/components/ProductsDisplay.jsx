"use client";
import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import Item from "./Item";
import { UserContext } from "../context/user";

export default function ProductsDisplay({}) {
  const { user, tokenHandler } = useContext(UserContext);
  const [items, setItems] = useState({ products: [] });
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
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap">
        {console.log(items)}
        {items.products?.map((item) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}
