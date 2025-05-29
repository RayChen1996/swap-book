import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import OrderForm from "./components/ui/OrderForm";

// 頁面元件（可先用 lazy 或 placeholder，之後再實作）
const Home = () => <div>首頁</div>;
const Products = () => <div>商品列表</div>;
const ProductDetail = () => <div>商品詳情</div>;
const Cart = () => <div>購物車</div>;
const Order = () => <OrderForm />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App 可作為 layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> },
    ],
  },
]);

export default router;
