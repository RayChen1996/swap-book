import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomeBlock from "./components/pages/home";
import CartBlock from "./components/pages/cart";
import AdminPage from "./components/pages/admin";

// 頁面元件（可先用 lazy 或 placeholder，之後再實作）
const Home = () => <HomeBlock />;
const Products = () => <div>商品列表</div>;
const ProductDetail = () => <div>商品詳情</div>;
const Cart = () => <CartBlock />;
const Order = () => <></>;
const Console = () => <AdminPage />;
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
      {
        path: "admin",
        element: <Console />,
        children: [
          {
            path: "products",
            element: <div>商品管理</div>, // 商品管理頁面
          },
          // 這裡可以添加更多管理員相關的子路由
          {
            path: "orders",
            element: <div>訂單列表</div>, // 訂單列表頁面
          },
          {
            path: "articles",
            element: <div>文章列表</div>, // 文章列表頁面
          },
          {
            path: "coupons",
            element: <div>優惠券管理</div>, // 優惠券管理頁面
          },
          // 可以根據需要添加更多管理員相關的子路由
        ],
      },

      // {
      //   path: "admin",
      //   element: <Admin />, // 管理員頁面
      // },
    ],
  },
]);

export default router;
