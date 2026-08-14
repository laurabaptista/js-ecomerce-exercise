const createPageTitle = () => {
  const title = document.createElement("h1");
  title.textContent = "Store";
  return title;
};

const createProductGridContainer = () => {
  const container = document.createElement("div");
  container.id = "product-grid";
  return container;
};

document.body.appendChild(createPageTitle());
document.body.appendChild(createProductGridContainer());

const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  const response = await fetch(PRODUCTS_ENDPOINT);
  const products = await response.json();
  console.log(products);
  return products;
};

fetchProducts();
