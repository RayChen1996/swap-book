export default function ServiceInfo() {
  return (
    <section>
      <div className="bg-white sm:container mx-auto">
        <header className="my-[26px] justify-between items-center flex">
          <h2 className="text-2xl font-bold">Service Information</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example service items */}
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Customer Support</h3>
            <p className="text-gray-600">24/7 customer support available.</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on orders over $50.</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-gray-600">30-day easy return policy.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
