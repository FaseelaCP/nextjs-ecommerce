"use client";
import "./productcard.css";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

ProductCard.defaultProps = {
  product: {},
};

export default function ProductCard(props: any) {
  var prod = props.product;
  var prodId = props.product ? props.product.id : null;

  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(prod);
  };
  

  return (
    <div className="product-card mb-3">
      <div className="card">
        <Link href={"/products/" + prodId}>
          <img src={prod?.image?.url} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link href={"/products/" + prod.id}>
            <h5
              className="card-title"
              style={{ color: "gray", textDecoration:'none' }}
            >
              {prod.name}
            </h5>
          </Link>
          <div className="card-text card-description" dangerouslySetInnerHTML={{__html: prod.description}}></div>
        </div>
        <div className="card-body">
          <button className="card-link btn btn-dark" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
