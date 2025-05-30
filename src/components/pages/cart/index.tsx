import { useState } from "react";

import { Minus, Plus, X } from "lucide-react";
import { Button, Input } from "@chakra-ui/react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  unitPrice: number;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Nike Airmax 270 react",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
      price: 998,
      quantity: 2,
      unitPrice: 499,
    },
    {
      id: "2",
      name: "Nike Airmax 270 react",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop",
      price: 998,
      quantity: 2,
      unitPrice: 499,
    },
  ]);

  const [voucherCode, setVoucherCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              price: newQuantity * item.unitPrice,
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const redeemVoucher = () => {
    if (voucherCode.trim()) {
      setAppliedCoupon(true);
      setVoucherCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shippingFee = 20;
  const discount = appliedCoupon ? subtotal * 0.1 : 0;
  const total = subtotal + shippingFee - discount;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-8">Cart</h1>

      {/* Cart Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
        {/* Table Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 font-medium text-gray-700">
            <div className="col-span-6">PRODUCT</div>
            <div className="col-span-2 text-center">PRICE</div>
            <div className="col-span-2 text-center">QTY</div>
            <div className="col-span-2 text-center">UNIT PRICE</div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="px-6 py-6">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Product Info */}
                <div className="col-span-6 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center">
                  <span className="font-medium">${item.price}</span>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Unit Price */}
                <div className="col-span-2 text-center">
                  <span className="font-medium">${item.unitPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Voucher Section */}
        <div>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="兌換卷"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={redeemVoucher}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6"
            >
              Redeem
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping fee</span>
              <span className="font-medium">${shippingFee}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Coupon</span>
              <span className="font-medium">
                {appliedCoupon ? `$${discount.toFixed(0)}` : "No"}
              </span>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between text-xl font-bold">
              <span>TOTAL</span>
              <span>${total}</span>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium mt-6">
              Check out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
