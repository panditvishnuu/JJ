export const fetchProducts = async () => {
  const response = await fetch("localhost:3000/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
