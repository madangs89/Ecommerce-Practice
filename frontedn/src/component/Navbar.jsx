import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopifyX
        </Link>

        {/* Middle: Desktop Nav + Search */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            <ShoppingCart size={22} />
          </Link>
          <Link to="/auth" className="text-gray-700 hover:text-blue-600">
            <User size={22} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="block text-gray-700 hover:text-blue-600">
            Shop
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
