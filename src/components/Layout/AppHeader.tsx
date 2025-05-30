import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

export default function AppHeader() {
  return (
    <div className="bg-white sm:container mx-auto">
      <header className="justify-between items-center flex my-[26px]">
        <div className="flex items-center gap-4">
          <select className=" bg-white border border-gray-300 rounded-md p-2">
            <option value="USD">EN</option>
            <option value="TWD">ZH</option>
          </select>
          {/* <select>
            <option value="en">EN</option>
            <option value="zh">ZH</option>
          </select> */}

          <select className=" bg-white border border-gray-300 rounded-md p-2">
            <option value="USD">USD</option>
            <option value="TWD">TWD</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <User />
            <span>My Profile</span>
          </button>
          <Link to={"/cart"} className="relative">
            <ShoppingCart />
          </Link>
          <Link to={"/admin"} className="flex items-center gap-2">
            <span>後台</span>
          </Link>
        </div>
      </header>
      <header className="my-[26px] justify-between items-center flex">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Icon.png" alt="logo" />
          <span className=" font-bold">E-Comm</span>
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
