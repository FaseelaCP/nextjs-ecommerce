'use client'

import { CartContext } from "../context/CartContext/CartContext";
import { useContext } from "react";

import "./cartpage.css";


interface CartItem {
  id: string;
  name: string;
  quantity: number;
  image: {
    url: string;
  };
}

function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cartpage">
      <h2>Your Cart!!</h2>
      {cartItems.length === 0 ? (
        <p>UH! OH! Your cart is empty.</p>
      ) : (
        <div>
          <ol>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="d-flex row m-5 mycart">
                  <div className="col-3">
                    <img src={item.image.url} className="cart-img" alt={item.name} />
                  </div>
                  <div className="col-3 cart-item-title">
                    <h3 style={{ height: 100, overflow: "hidden" }}>
                      {item.name}
                    </h3>
                  </div>
                  <div className="col-2">
                    <h5>Qty: {item.quantity}</h5>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-dark me-2" onClick={()=>{addToCart(item)}}>
                      Add
                    </button>
                    <button className="btn btn-dark me-2" onClick={()=>{removeFromCart(item.id)}}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default CartPage;
