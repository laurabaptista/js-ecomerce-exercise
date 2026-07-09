class Ecommerce {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct = (product) => {
    this.products = [...this.products, product];
  };

  getAllProducts = () => this.products;

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);

  getAllProductsNames = () =>
    this.products.map((product) => product.name).join(";");

  setProductPrice = (productId, price) => {
    this.products = this.products.map((product) =>
      product.id === productId ? { ...product, price } : product,
    );
  };

  getProductsByPrice = (initialPrice, finalPrice) =>
    this.products.filter(
      (product) => product.price >= initialPrice && product.price <= finalPrice,
    );

  addProductToCart = (product) => {
    this.cart = [...this.cart, product];
  };

  getCart = () => this.cart;

  getCartTotalPrice = () =>
    this.cart.reduce((total, product) => total + product.price, 0);
}
