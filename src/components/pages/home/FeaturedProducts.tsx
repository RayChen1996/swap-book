export default function FeaturedProducts() {
  return (
    <section>
      <div className="bg-white sm:container mx-auto">
        <header className="my-[26px] justify-between items-center flex">
          <h2 className="text-2xl font-bold">Featured Products</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example product items */}
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/featured-product1.jpg"
              alt="Featured Product 1"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Featured Product 1</h3>
            <p className="text-gray-600">$59.99</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/featured-product2.jpg"
              alt="Featured Product 2"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Featured Product 2</h3>
            <p className="text-gray-600">$79.99</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <img
              src="/featured-product3.jpg"
              alt="Featured Product 3"
              className="w-full h-auto"
            />
            <h3 className="font-semibold mt-2">Featured Product 3</h3>
            <p className="text-gray-600">$89.99</p>
          </article>
        </div>
      </div>
    </section>
  );
}
