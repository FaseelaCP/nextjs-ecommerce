'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { fetchProductsBySearchQuery } from "@/app/services/ProductService"; // Adjust import based on your actual service
import { Product } from "@chec/commerce.js/types/product";

export default function Search(props: any) {
  const [products, setProducts] = useState<Product[]>([]);

  const query = props.params.myParams;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProductsBySearchQuery(query);
        if (Array.isArray(productsData)) {
          // If productsData is an array, set it as the state directly
          setProducts(productsData);
        } else {
          // If productsData is not an array, handle it accordingly
          console.error("Invalid products data:", productsData);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
