const ShopFilters = ({ categories, selected, setSelected, sort, setSort }) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Filter by Category */}
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-3 py-1 rounded-full text-sm ${
              selected === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort by */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-1 rounded-md"
      >
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default ShopFilters;
