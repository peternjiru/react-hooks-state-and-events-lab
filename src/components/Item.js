import React, { useState } from "react";

function Item({ name, category }) {


  const [inCart, setToCart] = useState("")

  function addToCart(name) {

    if (inCart === "") {
      setToCart("in-cart")
    } else {
      setToCart("")
    }

  }


  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart({ name })}>Add to Cart</button>
    </li>
  );
}

export default Item;
