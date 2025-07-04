import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">ShopifyX</h2>
          <p className="text-sm text-gray-400">
            Your go-to online store for amazing deals and fast delivery.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/offers" className="hover:text-white">Offers</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/support" className="hover:text-white">Support</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/returns" className="hover:text-white">Returns</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect with us</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopifyX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
