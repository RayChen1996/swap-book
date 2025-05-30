export default function LatestNews() {
  return (
    <section>
      <div className="bg-white sm:container mx-auto">
        <header className="my-[26px] justify-between items-center flex">
          <h2 className="text-2xl font-bold">Latest News</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example news items */}
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">News Title 1</h3>
            <p className="text-gray-600">Brief description of the news item.</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">News Title 2</h3>
            <p className="text-gray-600">Brief description of the news item.</p>
          </article>
          <article className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold">News Title 3</h3>
            <p className="text-gray-600">Brief description of the news item.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
