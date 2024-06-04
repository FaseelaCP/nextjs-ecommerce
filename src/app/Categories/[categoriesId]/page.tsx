import { fetchCategoryProducts } from "@/app/services/CategoryService";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export default async function CategoryProducts(props: any) {
  const categoryid = props.params.categoriesId;
  let products = null;

  if (categoryid) {
    products = await fetchCategoryProducts(categoryid);
  }

  if (!categoryid) {
    console.log("product not found");
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
