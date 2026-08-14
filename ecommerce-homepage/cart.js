const CART_ENDPOINT = "https://fakestoreapi.com/carts/7";

const getTodayAsISODate = () => new Date().toISOString().split("T")[0];

export const addProductToCart = async (productId, quantity) => {
  const payload = {
    userId: 1,
    date: getTodayAsISODate(),
    products: [{ productId, quantity }],
  };

  const response = await fetch(CART_ENDPOINT, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const updatedCart = await response.json();
  console.log("Cart updated:", updatedCart);
  return updatedCart;
};
