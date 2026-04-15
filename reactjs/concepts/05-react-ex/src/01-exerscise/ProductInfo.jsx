import React from "react";

const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 1200,
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>Price: ${product.price}</h1>
      <h1>Abailability: {product.availability}</h1>

    </div>
  );
};

export default ProductInfo;
