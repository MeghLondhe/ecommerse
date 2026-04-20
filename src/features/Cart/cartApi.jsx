import { apiClient } from "../../services/appClient";

export const addProductToCart = async (user) => {
  const res = await apiClient.post("/users", user);
  return res.data;
};
