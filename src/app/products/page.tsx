"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/ProductService";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/Filter/page";
import { filteredProductsByCategory } from "../services/ProductService";
import { Product } from "@chec/commerce.js/types/product";
export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts((prevFilteredProducts) => prevFilteredProducts); 
       };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("selected categories", selectedCategories);
    const applyFilter = async () => {
      if (selectedCategories.length > 0) {
        const filtered = await filteredProductsByCategory(selectedCategories);
        console.log("filtered", filtered);
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    };

    applyFilter();
  }, [selectedCategories, products]);

  function onCategorySelection(updatedCategories:any) {
    setSelectedCategories(updatedCategories);
  }

  return (
    <>
      <h1 className="text-center mt-5">Products</h1>
      <div className="row">
        <div className="col-2 ms-2">
          <Filter
            selectedCategories={selectedCategories}
            onCategorySelection={onCategorySelection}
          />
        </div>
        <div className="col-9">
        {filteredProducts?.length > 0 ? (
  <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
    {filteredProducts.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
) : (
  <p>Loading products...</p>
)}
        </div>
      </div>
    </>
  );
}
