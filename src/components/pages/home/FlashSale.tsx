export default function FlashSale() {
  return (
    <section>
      <div className="bg-white sm:container mx-auto">
        <header className="my-[26px] justify-between items-center flex">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example product items */}
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/flash-sale-product1.jpg"
              alt="Flash Sale Product 1"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Flash Sale Product 1</h3>
            <p className="text-gray-600">$19.99</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/flash-sale-product2.jpg"
              alt="Flash Sale Product 2"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Flash Sale Product 2</h3>
            <p className="text-gray-600">$29.99</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/flash-sale-product3.jpg"
              alt="Flash Sale Product 3"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Flash Sale Product 3</h3>
            <p className="text-gray-600">$39.99</p>
          </article>
        </div>
      </div>
    </section>
  );
}
