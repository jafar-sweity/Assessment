// App.js
import React, { useState } from "react";
import ProductList from "./ProductList";

const App = () => {
  const [filter, setFilter] = useState("All");
  const products = [
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "T-Shirt", category: "Clothing", price: 19 },
    { name: "Smartphone", category: "Electronics", price: 699 },
    { name: "Jeans", category: "Clothing", price: 49 },
  ];

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Electronics")}>Electronics</button>
        <button onClick={() => setFilter("Clothing")}>Clothing</button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
