import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomeBlock from "./components/pages/home";
import CartBlock from "./components/pages/cart";
// import AdminPage from "./components/pages/admin";

// 頁面元件（可先用 lazy 或 placeholder，之後再實作）
const Home = () => <HomeBlock />;
const Products = () => <div>商品列表</div>;
const ProductDetail = () => <div>商品詳情</div>;
const Cart = () => <CartBlock />;
const Order = () => <></>;
// const Admin = () => <AdminPage />; // 管理員頁面

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
      // {
      //   path: "admin",
      //   element: <Admin />, // 管理員頁面
      // },
    ],
  },
]);

export default router;
