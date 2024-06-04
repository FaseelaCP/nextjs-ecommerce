import { fetchProductById } from "@/app/services/ProductService";

export default async function ProductDetail(props: any) {
  const prodId = props.params.productId;

  const product = await fetchProductById(prodId);

  if (!product) {
    console.log("product not found");
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <img src={product?.image?.url} style={{ width: 400 }} alt="" />
        </div>
        <div className="col-7 mt-5" style={{ width: 500 }}>
          <h4>{product?.name}</h4>
          <p dangerouslySetInnerHTML={{ __html: product?.description }}></p>
          <h2>
            <span>$</span>
            {product?.price?.formatted_with_code}
          </h2>
          <button className="btn btn-dark mt-5">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
