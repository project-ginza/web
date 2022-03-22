import React from "react";

interface ProductProps {
  id: number;
  category: string;
  name: string;
  size: string;
  image: string;
  desc: string;
  additional: {detail: string;};
}
const ProductComponent = (props:{product:ProductProps}) => {
  const { product } = props;
  
  return <div>
    <div>ProductComponent</div>
    <div>Product Name: {product.name}</div>
    <div>Product Size: {product.size}</div>
    <div>Product Image: <img src={product.image} width="100" height="100" /></div>
    <div>Product Description: {product.desc}</div>
    <div dangerouslySetInnerHTML= {{__html:`${product.additional.detail}`}} />
  </div>;
};

export default ProductComponent;
