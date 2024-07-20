import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "../context/cart";

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className=" flex flex-col items-center shop-item md:max-w-[15vw] md:min-w-[12vw] max-w-[40vw] min-w-[30vw] ">
      <Image
        src={item.imageUrl}
        width={100}
        height={100}
        alt={item.name}
        title={item.name}
        className=" img-border"
      ></Image>
      <div className="flex flex-col items-center justify-between text-center">
        <div>
          <h4 className="cursor-default line-clamp-1">{item.name}</h4>
          <p className="cursor-default shop-item-desc line-clamp-2">
            {item.description}
          </p>
        </div>
        <div>
          {" "}
          <p className="cursor-default">${item.price}</p>
          <button
            className="p-1 mt-1 mb-2 text-white bg-blue-600 rounded-sm hover:bg-blue-500"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
