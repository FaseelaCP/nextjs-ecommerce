import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY as string);


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
