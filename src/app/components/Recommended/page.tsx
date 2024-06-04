import { fetchRecommended } from "../../services/ProductService";
import ProductCard from "../ProductCard/ProductCard";

export default async function Recommended() {
  const products = await fetchRecommended(12);
  return (
    <div className="container mt-5 d-flex flex-wrap justify-content-evenly">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
