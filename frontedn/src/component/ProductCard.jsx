import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-200">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-cover rounded-xl"
      />
      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-blue-600 font-bold text-xl mt-1">₹ {product.price}</p>

        {/* Optional Ratings */}
        <div className="flex items-center mt-1 space-x-1 text-yellow-500 text-sm">
          {"★".repeat(Math.round(product.rating || 4))}{"☆".repeat(5 - Math.round(product.rating || 4))}
        </div>

        {/* Add to Cart */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
