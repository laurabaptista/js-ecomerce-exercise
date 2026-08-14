import { addProductToCart } from "./cart.js";

const createPageTitle = () => {
  const title = document.createElement("h1");
  title.textContent = "Store";
  return title;
};

const createProductGridContainer = () => {
  const container = document.createElement("div");
  container.id = "product-grid";
  container.classList.add("product-grid");
  return container;
};

document.body.appendChild(createPageTitle());
document.body.appendChild(createProductGridContainer());

const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";

const fetchProducts = async () => {
  const response = await fetch(PRODUCTS_ENDPOINT);
  const products = await response.json();
  return products;
};

const createProductCard = (product) => {
  const card = document.createElement("article");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.classList.add("product-card__image");

  const name = document.createElement("h2");
  name.textContent = product.title;
  name.classList.add("product-card__name");

  const price = document.createElement("p");
  price.textContent = `${product.price.toFixed(2)} EUR`;
  price.classList.add("product-card__price");

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to cart";
  addToCartButton.classList.add("product-card__button");
  addToCartButton.addEventListener("click", () => {
    addProductToCart(product.id, 1);
  });

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(addToCartButton);

  return card;
};

const renderProductGrid = (products, container) => {
  products.forEach((product) => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
};

const gridContainer = document.getElementById("product-grid");

fetchProducts().then((products) => {
  renderProductGrid(products, gridContainer);
});
