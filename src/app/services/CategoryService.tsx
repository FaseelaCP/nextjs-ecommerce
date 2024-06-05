import Commerce from "@chec/commerce.js";

const commerce = new Commerce('pk_57196711a73f05d1bfdb6a4528a11109ff4d32093bd31');


export async function fetchCategories() {
  try {
    const { data: categories } = await commerce.categories.list();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function fetchCategoryProducts(categoryid?: string) { 
  try {
    if (!categoryid) {
      console.error("Category ID is undefined.");
      return [];
    }

    const { data: products } = await commerce.products.list({
      category_id: [categoryid],
    });
    console.log("categoryprod", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
