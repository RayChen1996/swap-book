import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import AppHeader from "./components/Layout/AppHeader";
import AppFooter from "./components/Layout/AppFooter";

const TITLE_MAP: Record<string, string> = {
  "/": "首頁",
  "/products": "商品列表",
  "/cart": "購物車",
  "/order": "訂單頁面",
};

function App() {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.startsWith("/products/") &&
      location.pathname !== "/products"
    ) {
      document.title = "商品詳情";
    } else {
      document.title = TITLE_MAP[location.pathname] || "電商網站";
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <AppHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
