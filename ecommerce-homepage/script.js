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

const createProductCard = (product) => {
  const card = document.createElement("article");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;

  const name = document.createElement("h2");
  name.textContent = product.title;

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to cart";
  addToCartButton.addEventListener("click", () => {
    console.log(`Clicked "Add to cart" for product id ${product.id}`);
  });

  card.appendChild(image);
  card.appendChild(name);
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
