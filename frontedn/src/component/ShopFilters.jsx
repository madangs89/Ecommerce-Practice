import { useEffect, useState } from "react";
import ShopFilters from "../component/ShopFilters";
import ProductGrid from "../component/ProductGrid";
import { useSelector } from "react-redux";

const categories = ["Electronics", "Footwear", "Accessories"];

const Shop = () => {
  const [selected, setSelected] = useState("All");
  const [sort, setSort] = useState("");
  const all = useSelector((state) => state.product.products);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (!all || all.length === 0) {
      setAllProducts([]);
      return;
    }
    let products = [...all];
    
    // Filter by category (only if not "All")
    if (selected && selected !== "All") {
      products = products.filter((product) => product.category === selected);
    }

    // Sort by price
    if (sort) {
      if (sort === "low") {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === "high") {
        products.sort((a, b) => b.price - a.price);
      }
    }
    
    setAllProducts(products);
  }, [all, selected, sort]); // Include all dependencies

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

      <ProductGrid products={allProducts} />
    </div>
  );
};

export default Shop;