import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {/* Step 2e: Map over products and display each product */}
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList; // Export the ProductList component
