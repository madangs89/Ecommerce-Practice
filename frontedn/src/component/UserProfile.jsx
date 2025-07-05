import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Ravi Kumar",
    email: "ravi@example.com",
    phone: "9876543210",
    address: {
      streetAddress: "221B Baker Street",
      city: "Bangalore",
      state: "Karnataka",
      pinCode: "560001",
    },
    createdAt: "2024-12-01T12:00:00Z",
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Profile Info */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center border-r border-gray-200">
          <img
            src="https://i.pravatar.cc/150?img=67"
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.phone}</p>
          <p className="text-xs text-gray-400 mt-2">
            Joined on {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Right: Shipping Info */}
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Shipping Address
            </h3>
            <div className="text-gray-700 space-y-1 text-base leading-6">
              <p>{user.address.streetAddress}</p>
              <p>
                {user.address.city}, {user.address.state}
              </p>
              <p>{user.address.pinCode}</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/orders")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm transition"
            >
              <ShoppingBag size={18} />
              View Orders
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-sm transition"
            >
              <ShoppingCart size={18} />
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
