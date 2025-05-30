import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomeBlock from "./components/pages/home";

// 頁面元件（可先用 lazy 或 placeholder，之後再實作）
const Home = () => <HomeBlock />;
const Products = () => <div>商品列表</div>;
const ProductDetail = () => <div>商品詳情</div>;
const Cart = () => <div>購物車</div>;
const Order = () => <></>;

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
