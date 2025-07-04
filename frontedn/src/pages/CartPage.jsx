import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Smart Watch",
      price: 2499,
      quantity: 2,
      image: "https://via.placeholder.com/150x150?text=Watch",
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      price: 1499,
      quantity: 1,
      image: "https://via.placeholder.com/150x150?text=Earbuds",
    },
  ]);
  const navigate = useNavigate()

  const [selectedItems, setSelectedItems] = useState([]);

  // ✅ Toggle select/unselect item
  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // ✅ Update quantity
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  // ✅ Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  // ✅ Calculate selected total
  const total = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mt-10 mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              {/* ✅ Select checkbox */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">₹ {item.price}</p>
                </div>
              </div>

              {/* ✅ Quantity & remove */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex items-center gap-2 border px-2 py-1 rounded">
                  <button
                    className="text-lg px-2"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="text-lg px-2"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">
                  ₹ {item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* ✅ Total only for selected */}
          <div className="text-right mt-6 text-lg font-semibold">
            Selected Total: ₹ {total}
          </div>

          {/* ✅ Checkout only if something selected */}
          {selectedItems.length > 0 && (
            <div className="text-right mt-4">
              <button onClick={() => navigate("/checkout")} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
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
