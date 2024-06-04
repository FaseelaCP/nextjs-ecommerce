"use client";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../services/CategoryService";
import { useRouter } from "next/navigation";

export default function Filter(props: any) {
  const [categories, setCategories] = useState<any[]>([]);
  const selectedCategories = props.selectedCategories;
  const router = useRouter();

  useEffect(() => {
    async function fetchCategoriesData() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategoriesData();
  }, []);

  function handleCategoryClick(event:any) {
    const categoryId = event.target.value;
    const isSelected = selectedCategories.includes(categoryId);

    const updatedSelectedCategories = isSelected
      ? selectedCategories.filter((id:any) => id !== categoryId)
      : [...selectedCategories, categoryId];

    props.onCategorySelection(updatedSelectedCategories);
  }

  return (
    <>
      <div className="ms-3">
        <h4>Filter:</h4>
        {categories.map((category, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={category.id}
              id={`category-${category.id}`}
              onChange={handleCategoryClick}
              checked={selectedCategories.includes(category.id)}
            />
            <label
              className="form-check-label"
              htmlFor={`category-${category.id}`}
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
