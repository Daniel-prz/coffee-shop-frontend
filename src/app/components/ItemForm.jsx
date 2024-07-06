import React from "react";
import { CartProvider } from "../context/Cart";

export default function ItemForm() {
  const formHandler = async (e) => {
    e.preventDefault();
    axios.post("", {});
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>
          <input type="text" name="itemName" id="itemName" />
        </label>
        <label>
          <input type="number" name="price" id="price" />
        </label>
        <label>
          <input type="number" name="stock" id="stock" />
        </label>
        <label>
          <input type="text" name="category" id="category" />
        </label>
        <label>
          <input type="text" name="description" id="description" />
        </label>
        <label>
          <input type="text" name="imageUrl" id="imageUrl" />
        </label>
        <button type="submit"></button>
      </form>
    </div>
  );
}
