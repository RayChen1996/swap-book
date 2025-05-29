import axios from "axios";
import { OrderFormData } from "../forms/order";

export const api = axios.create({
  baseURL: "https://example.com/api", // 可依需求修改
});

export function postOrder(data: OrderFormData) {
  return api.post("/order", data);
}
