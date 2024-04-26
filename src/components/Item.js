import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const liClassName = inCart ? "in-cart" : "";

  function handleClick() {
    setInCart((inCart) => !inCart);
  }
  return (
    //change classname if li element is in cart
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
