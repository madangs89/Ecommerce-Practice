import { useState } from "react";

const CheckoutPage = () => {
  const cartItems = [
    {
      id: 1,
      title: "Smart Watch",
      price: 2499,
      quantity: 2,
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      price: 1499,
      quantity: 1,
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "cod", // cod or card
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert("✅ Order Placed!\n\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="max-w-6xl mt-10 mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      {/* Billing Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">🧾 Billing & Shipping</h2>
        <form className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <div className="flex gap-4">
            <input
              name="city"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              name="zip"
              type="text"
              placeholder="ZIP"
              value={form.zip}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Payment Options */}
          <div className="mt-4">
            <p className="font-semibold mb-2">💳 Payment Method:</p>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={form.payment === "card"}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">🧺 Order Summary</h2>
        <div className="space-y-4 border p-4 rounded shadow-sm">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p>₹ {item.price * item.quantity}</p>
            </div>
          ))}
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹ {total}</p>
          </div>
          <button
            onClick={placeOrder}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
