import React, { useContext } from "react";
import "../styles/cart.css";
import  CartContext  from "../context/CartContext";

function Cart() {
  const { cartProducts } = useContext(CartContext);
  return cartProducts.length !== 0(
    cartProducts.map((item, index)=>{
        return(
            <>
            <article className="wrapper-cart">
            <div>
                <img></img>
                <div>
                  <p id="brand-txt">{item.brand}</p>
                  <p id="origin-txt">{item.origin}</p>
                </div>
            </div>
            </article>
            </>
        )
    })
  );
}

export default Cart;
