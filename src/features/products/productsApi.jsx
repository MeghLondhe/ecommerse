import { apiClient } from "../../services/appClient";

export const getProducts = async () => {
  const res = await apiClient.get("/users");
  return res.data;
};
