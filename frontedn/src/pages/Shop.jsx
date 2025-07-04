import { useState } from "react";
import ShopFilters from "../component/ShopFilters";
import ProductGrid from "../component/ProductGrid";


const allProducts = [
  {
    title: "Smartphone",
    price: 9999,
    image: "https://via.placeholder.com/400x300?text=Phone",
    category: "Electronics",
  },
  {
    title: "Sneakers",
    price: 2999,
    image: "https://via.placeholder.com/400x300?text=Shoes",
    category: "Footwear",
  },
  {
    title: "Wrist Watch",
    price: 1599,
    image: "https://via.placeholder.com/400x300?text=Watch",
    category: "Accessories",
  },
  {
    title: "Laptop",
    price: 49999,
    image: "https://via.placeholder.com/400x300?text=Laptop",
    category: "Electronics",
  },
];

const categories = ["Electronics", "Footwear", "Accessories"];

const Shop = () => {
  const [selected, setSelected] = useState("All");
  const [sort, setSort] = useState("");

  const filtered = allProducts.filter((p) =>
    selected === "All" ? true : p.category === selected
  );
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🛍️ Shop All Products</h1>

      <ShopFilters
        categories={categories}
        selected={selected}
        setSelected={setSelected}
        sort={sort}
        setSort={setSort}
      />

      <ProductGrid products={sorted} />
    </div>
  );
};

export default Shop;
