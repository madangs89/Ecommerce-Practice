import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataFromCart, updateQuantity } from "../app/slice/thunk/cartThunk";
import { removeFromCart } from "../app/slice/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      let data = JSON.parse(localStorage.getItem("cart"));
      if (data) {
        setSelectedItems(data.map((item) => item.id));
      }
    } else {
      dispatch(getDataFromCart());
    }
  }, [dispatch, isAuth]);

  console.log(cartItems, "cartItems");

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  function handleQuantity(quantity, id, m, n, s, k) {


    if (!isAuth) {
      dispatch(removeFromCart({ quantity, productId: id }));
    } else {
      dispatch(updateQuantity({ quantity, productId: id }));
    }
  }

  return (
    <div className="max-w-6xl mt-10 mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
      {cartItems?.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              {/* ✅ Select checkbox */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(
                    item.productId || item.productId._id
                  )}
                  onChange={() =>
                    toggleSelect(item.productId || item.productId._id)
                  }
                />
                <img
                  src={item.image || item.productId.images[0]}
                  alt={item.title || item.productId.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">
                    {item.title || item.productId.title}
                  </h2>
                  <p className="text-gray-600">
                    ₹ {item.price || item.productId.price}
                  </p>
                </div>
              </div>

              {/* ✅ Quantity & remove */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex items-center gap-2 border px-2 py-1 rounded">
                  <button
                    onClick={() =>
                      handleQuantity(
                        item.quantity - 1,
                        item.productId._id ||
                          item.productId._id ||
                          item.productId.id
                      )
                    }
                    className="text-lg px-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantity(
                        item.quantity + 1,
                        item.productId._id ||
                          item.productId._id ||
                          item.productId.id
                      )
                    }
                    className="text-lg px-2"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">₹ {item.price * item.quantity}</p>
                <button className="text-red-600 hover:underline text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Total only for selected */}
          <div className="text-right mt-6 text-lg font-semibold">
            Selected Total: ₹ {100}
          </div>

          {/* ✅ Checkout only if something selected */}
          {selectedItems.length > 0 && (
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/checkout")}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
