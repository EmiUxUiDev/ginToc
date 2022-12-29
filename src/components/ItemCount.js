import { useState, useContext } from "react";
import "../styles/itemcount.css";
import CartContext from "../context/CartContext";

export default function ItemCount({
  onSubHandler,
  onAddHandler,
  amountItems,
  detail,
}) {
  const { addItemToCart, setCountVisualisation } = useContext(CartContext);
  const { id, brand, wand, contains, origin, summary, price, stock, path } =
    detail[0];
   console.log(detail[0]); 

  const addItem = () => {
    const setItem = {
      id,
      brand,
      wand,
      contains,
      origin,
      price,
      stock,
      path,
      qty: amountItems
    };
    console.log(setItem);
    addItemToCart(setItem);
    setCountVisualisation(false);
    console.log(setItem);
  };

  return (
    <div className="counter-wrapper">
      <div className="btn-container">
        <button className="btn" onClick={onSubHandler}>
          <img
            id="dwn"
            src={require("../img/icons/chevron-dwn.png")}
            alt="Button down"
          />
        </button>

        <p id="count">{amountItems}</p>

        <button className="btn" onClick={onAddHandler}>
          <img
            id="up"
            src={require("../img/icons/chevron-up.png")}
            alt="Button up"
          />
        </button>
      </div>

      <button className="add-btn" onClick={addItem}>
        Add to cart
      </button>
    </div>
  );
}
