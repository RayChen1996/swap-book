import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

export default function AppHeader() {
  return (
    <div className="bg-white sm:container mx-auto">
      <header className="justify-between items-center flex">
        <div className="flex items-center gap-4">
          <select>
            <option value="en">EN</option>
            <option value="zh">ZH</option>
          </select>
          <select>
            <option value="USD">USD</option>
            <option value="TWD">TWD</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <User />
            <span>My Profile</span>
          </button>
          <button className="relative">
            <ShoppingCart />
          </button>
        </div>
      </header>
      <header className="  justify-between items-center flex">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Icon.png" alt="logo" />
          <span>E-Comm</span>
        </Link>
        <ul className="flex items-center gap-4 max-sm:hidden lg:flex gap-x-[97px]">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/products">BAGS</Link>
          </li>
          <li>
            <Link to="/products">SNEAKERS</Link>
          </li>
          <li>
            <Link to="/products">BELT</Link>
          </li>
          <li>
            <Link to="/products">CONTACT</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
