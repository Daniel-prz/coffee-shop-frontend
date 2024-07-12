import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className=" flex flex-col items-center shop-item">
      <Image
        src={item.imageUrl}
        width={100}
        height={80}
        alt={item.name}
      ></Image>
      <div className="flex flex-col items-center text-center justify-between">
        <div>
          <h4 className="cursor-default">{item.name}</h4>
          <p className="shop-item-desc cursor-default">{item.description}</p>
        </div>
        <div>
          {" "}
          <p className="cursor-default">${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
