"use client";
import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchProductsBySearchQuery,
} from "../services/ProductService";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/Filter/page";
import { filteredProductsByCategory } from "../services/ProductService";
import { Product } from "@chec/commerce.js/types/product";
import { useRouter } from "next/navigation";
import "./products.css";

export default function Products(props:any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const searchQuery=props.searchParams.query;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
        
      }
    };
  
    fetchData();
  }, []);
  

  console.log(searchQuery);
  useEffect(() => {
     const fetchData = async () => {
     if (searchQuery) {
     const searchProducts = await fetchProductsBySearchQuery(searchQuery) as Product[];
     setFilteredProducts(searchProducts);
     setLoading(false); // Update loading state after fetching data
    } else {
     setFilteredProducts(products);
     setLoading(false); // Update loading state even if no search query
     }
     };
    
  fetchData();
  }, [searchQuery]);

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

  function onCategorySelection(updatedCategories: any) {
    setSelectedCategories(updatedCategories);
  }

  return (
    <div className="productspage container-fluid">
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
    </div>
  );
}
