import { useMutation } from "@tanstack/react-query";
import { postOrder } from "../api";
import { OrderFormData } from "../forms/order";

export function useOrderMutation() {
  return useMutation({
    mutationFn: (data: OrderFormData) => postOrder(data),
  });
}
