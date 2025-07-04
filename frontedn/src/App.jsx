import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./component/Loader";

const Navbar = lazy(() => import("./component/Navbar"));
const ProductCard = lazy(() => import("./component/ProductCard"));
const Home = lazy(() => import("./pages/Home"));

const Shop = lazy(() => import("./pages/Shop"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader/>}  >
        <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default App;
