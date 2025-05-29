import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "姓名至少 2 個字"),
  email: z.string().email("請輸入正確的 Email"),
  address: z.string().min(5, "地址至少 5 個字"),
  quantity: z.number().min(1, "數量至少 1 件"),
});

export type OrderFormData = z.infer<typeof orderSchema>;
