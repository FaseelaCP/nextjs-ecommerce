'use client'
console.log(__dirname);
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
  const { cartItems } = useContext(CartContext);

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

                  <div className="col-3">
                    <h5>Quantity:</h5>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-dark me-2">
                      Add
                    </button>
                    <button className="btn btn-dark me-2">
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
