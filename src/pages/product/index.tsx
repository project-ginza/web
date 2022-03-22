import React from "react";
import { useParams } from "react-router-dom";
import ProductComponent from "../../components/ProductComponent";
import products from "../../data/products.json";

const ProductPage = () => {
  let params = useParams();
  const product = products.find(
    (product) => product.id === parseInt(params.productId!, 10)
  );
  return (
    <div>
      <div>ProductPage</div>
      <ProductComponent product={product!} />
    </div>
  );
};

export default ProductPage;
