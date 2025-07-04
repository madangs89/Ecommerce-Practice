import React from "react";

const OrdersPage = () => {
  // Fake order data
  const orders = [
    {
      id: "ORD001",
      date: "2025-07-04",
      status: "Delivered",
      total: 4998,
      items: [
        { name: "Smart Watch", qty: 2, price: 2499 },
      ],
    },
    {
      id: "ORD002",
      date: "2025-07-02",
      status: "Shipped",
      total: 1499,
      items: [
        { name: "Wireless Earbuds", qty: 1, price: 1499 },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mt-10 mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <p className="font-semibold">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-green-600 font-medium">
                  Status: {order.status}
                </div>
              </div>

              <div className="divide-y text-sm">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-2 flex justify-between">
                    <div>
                      {item.name} <span className="text-gray-500">× {item.qty}</span>
                    </div>
                    <div>₹ {item.price * item.qty}</div>
                  </div>
                ))}
              </div>

              <div className="text-right mt-4 font-bold text-lg">
                Total: ₹ {order.total}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
