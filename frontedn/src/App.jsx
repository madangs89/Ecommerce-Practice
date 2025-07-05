import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuthThunk } from "./app/slice/thunk/authThunk";
import Auth from "./component/Auth";
import UserProfile from "./component/UserProfile";
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
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const checkAuth = async () => {
    const data = await dispatch(checkAuthThunk());
    console.log(data);
  };
  useEffect(() => {
    checkAuth();
  }, []);

  console.log(isAuth);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/auth"
            element={<AuthPage>{isAuth ? <UserProfile /> : <Auth />}</AuthPage>}
          />
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
