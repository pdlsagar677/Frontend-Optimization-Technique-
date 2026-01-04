"use client";

import React from "react";

const ProductCard = React.memo(({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <img src={product.image} width={120} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
    </div>
  );
});

export default ProductCard;
