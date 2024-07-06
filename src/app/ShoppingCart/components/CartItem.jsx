import React from "react";

export default function CartItem({ item }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>

      <div className="flex justify-between items-center" key={item.id}>
        <div className="flex gap-4">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="rounded-md h-24"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-gray-600">{item.price}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              addToCart(item);
            }}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
