import { memo, useState } from "react";
import { ShoppingCart } from "lucide-react";

type Product = {
  category: string;
  content: string;
  description: string;
  id: string;
  imageUrl: string;
  imagesUrl: string[];
  is_enabled: number;
  num: number;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
};

const categories = ["All", "Bags", "Sneakers", "Watches", "Belt", "Sunglasses"];

export default function BestSeller() {
  const [activeCategory, setActiveCategory] = useState("All");

  const products: Product[] = [
    {
      category: "Sneakers",
      content: "這是內容",
      description: "Sit down please 名設計師設計",
      id: "-L9tH8jxVb2Ka_DYPwng",
      imageUrl: "主圖網址",
      imagesUrl: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      is_enabled: 1,
      num: 1,
      origin_price: 100,
      price: 600,
      title: "Nike Air Max 270 React",
      unit: "個",
    },
    {
      category: "Bags",
      content: "這是內容",
      description: "Premium leather bag",
      id: "-L9tH8jxVb2Ka_DYPwng2",
      imageUrl: "主圖網址",
      imagesUrl: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      is_enabled: 1,
      num: 1,
      origin_price: 150,
      price: 120,
      title: "Leather Crossbody Bag",
      unit: "個",
    },
    {
      category: "Sneakers",
      content: "這是內容",
      description: "Classic running shoes",
      id: "-L9tH8jxVb2Ka_DYPwng3",
      imageUrl: "主圖網址",
      imagesUrl: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      is_enabled: 1,
      num: 1,
      origin_price: 180,
      price: 140,
      title: "Classic Running Shoes",
      unit: "個",
    },
    {
      category: "Watches",
      content: "這是內容",
      description: "Luxury timepiece",
      id: "-L9tH8jxVb2Ka_DYPwng4",
      imageUrl: "主圖網址",
      imagesUrl: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      is_enabled: 1,
      num: 1,
      origin_price: 300,
      price: 250,
      title: "Luxury Watch",
      unit: "個",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
        BEST SELLER
      </h2>

      <Category
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function Category({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <ul className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
        {categories.map((category) => (
          <li key={category} className="text-sm md:text-base">
            <button
              onClick={() => onCategoryChange(category)}
              className={`pb-2 transition-all duration-200 hover:text-blue-600 ${
                activeCategory === category
                  ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                  : "text-gray-700 hover:border-b-2 hover:border-blue-300"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const ProductCard = memo(function ProductCard({
  product,
}: {
  product: Product;
}) {
  const discountPercentage = Math.round(
    ((product.origin_price - product.price) / product.origin_price) * 100
  );
  const hasDiscount = product.origin_price > product.price;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}

        <div className="  relative">
          <img
            src={product.imagesUrl[0] || "/placeholder.svg"}
            alt={product.title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   z-10   hover:scale-110 transition-all duration-300 items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-2 text-center flex flex-col items-center justify-center">
        <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              ${product.origin_price}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < 4 ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
        </div>
      </div>
    </div>
  );
});
