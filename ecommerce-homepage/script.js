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
