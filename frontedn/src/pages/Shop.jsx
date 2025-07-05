import { useSelector } from "react-redux";
import ProductGrid from "../component/ProductGrid";
import { useEffect, useState } from "react";
const Shop = () => {
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "jewelery",
    "women's clothing",
  ];
  const [category, setCategory] = useState("All");
  const data = useSelector((state) => state.product.products);
  const [shopData, setShopData] = useState([]);
  const [sort, setSort] = useState("");

  const handler = () => {
    let dat = [...data];
    if (category && category !== "All") {
      dat = dat.filter((product) => product.category === category);
    }
    if (sort && sort !== "") {
      switch (sort) {
        case "lowest":
          dat = dat.sort((a, b) => a.price - b.price);
          break;
        case "highest":
          dat = dat.sort((a, b) => b.price - a.price);
          break;
      }
    }
    return dat;
  };

  useEffect(() => {
    const data = handler();
    setShopData(data);
  }, [category, data, sort]);

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <div className="">
        {categories.map((cat) => (
          <button
            onClick={() => setCategory(cat)}
            key={cat}
            className={`${
              cat == category ? "bg-blue-500" : "bg-gray-300"
            } hover:bg-blue-600 text-white py-2 px-4 rounded mr-2`}
          >
            {cat}
          </button>
        ))}
        <select
          name="sort"
          onChange={(e) => setSort(e.target.value)}
          className=""
        >
          <option value="">Sort By</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>
      {/* Your Shop code here */}

      <ProductGrid products={shopData} />
    </div>
  );
};

export default Shop;
