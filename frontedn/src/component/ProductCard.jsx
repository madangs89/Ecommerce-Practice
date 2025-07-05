import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartIfNotAuth } from "../app/slice/cartSlice";
import { addToCartThunk } from "../app/slice/thunk/cartThunk";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handler = (id) => {
    navigate(`/product/${id}`);
  };

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleAddToCar = (product) => {
    if (!isAuth) {
      dispatch(
        addToCartIfNotAuth([
          {
            productId: product._id,
            title: product.title,
            price: product.price,
            images: product.images[0],
          },
        ])
      );
      toast.success("Product added to cart");
    } else {
      let data = JSON.parse(localStorage.getItem("cart"));
      console.log(data, Array.isArray(data));
      if (Array.isArray(data)) {
        const findeddata = data.find((item) => item.productId === product._id);
        if (findeddata) {
          findeddata.quantity = (findeddata.quantity || 0) + 1;
        } else {
          data.push({ productId: product._id, quantity: 1 });
        }
        dispatch(addToCartThunk({ product: [...data] }));
        toast.success("Product added to cart");
      } else {
        const newCart = [{ productId: product._id, quantity: 1 }];
        dispatch(addToCartThunk({ product: newCart }));
        toast.success("Product added to cart");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-200">
      {/* Product Image */}
      <img
        onClick={() => handler(product.id || product._id)}
        src={product?.images[0]}
        alt={product.title}
        className="w-full h-56 object-cover rounded-xl"
      />
      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h2>
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.category}
        </h2>
        <p className="text-blue-600 font-bold text-xl mt-1">
          ₹ {product.price}
        </p>

        {/* Optional Ratings */}
        <div className="flex items-center mt-1 space-x-1 text-yellow-500 text-sm">
          {"★".repeat(Math.round(product.rating))}
          {"☆".repeat(5 - Math.round(product.rating))}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => handleAddToCar(product)}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
