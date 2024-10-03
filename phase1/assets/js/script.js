const products = [
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "T-Shirt", category: "Clothing", price: 19 },
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Jeans", category: "Clothing", price: 49 },
];

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.category}</p><p>$${product.price}</p>`;
    productList.appendChild(productDiv);
  });
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

displayProducts(products);
