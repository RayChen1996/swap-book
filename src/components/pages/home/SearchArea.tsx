export default function SearchArea() {
  return (
    <footer className="text-center py-4">
      {/* 搜尋欄與頁腳內容 */}
      <input
        type="text"
        placeholder="Search"
        className="border rounded px-2 py-1"
      />
      <button className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
        Search
      </button>
    </footer>
  );
}
