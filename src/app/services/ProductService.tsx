import Commerce from "@chec/commerce.js";

const commerce = new Commerce('pk_57196711a73f05d1bfdb6a4528a11109ff4d32093bd31');


export async function fetchProducts() {
  try {
    const {data : products} = await commerce.products.list();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export async function fetchProductById(prodId: string) {
  try {
    const product = await commerce.products.retrieve(prodId);

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return "";
  }
}
export async function fetchProductsBySearchQuery(query: string) {
  try {
    const products = await commerce.products.list(query);

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function fetchRecommended(limit: number) {
  try {
    const { data: products } = await commerce.products.list({
      limit: limit,
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export async function filteredProductsByCategory(selectedCategories: string[]) {
  try {
    const promises = selectedCategories.map(async (categoryId) => {
      const { data: products } = await commerce.products.list({
        category_id: categoryId,
      });
      return products;
    });

    const productsByCategory = await Promise.all(promises);

    // Merge products from all categories into a single array
    const allProducts = productsByCategory.reduce((acc, products) => {
      return acc.concat(products);
    }, []);

    console.log("filtered ", allProducts);
    return allProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
