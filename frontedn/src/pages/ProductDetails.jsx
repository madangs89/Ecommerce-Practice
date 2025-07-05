import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "../component/ProductGrid";
import SectionHeader from "../component/SectionHeader";
import { useEffect } from "react";
import { getSingleProductThunk } from "../app/slice/thunk/productThunk";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    selectedProduct: product,
    loading,
    error,
    products,
  } = useSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProductThunk({ id }));
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!product || !product.title) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Product not found</div>
      </div>
    );
  }
  console.log(product.rating , "prudct rating");
  

  return (
    <>
      <div className="max-w-9xl mt-10 mx-auto py-10 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <img
          src={product?.images?.[0]}
          alt={product?.title || "Product"}
          className="w-full max-h-[500px] object-contain rounded-xl shadow"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product?.title}
          </h1>
          <p className="text-gray-600 mb-4">{product?.description}</p>

          <div className="text-xl font-bold text-blue-600 mb-2">
            ₹ {product?.price}
          </div>

          <div className="text-yellow-500 text-sm mb-6">
            {"★".repeat(Math.round(product?.rating || 0)) +
              "☆".repeat(5 - Math.round(product?.rating || 0))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <SectionHeader title="Related Products" subtitle="You might also like" />
      {/* Related Products */}
      <div className="max-w-9xl px-10">
        <ProductGrid
          products={[
            ...products.filter((item) => item.category === product.category),
          ]}
        />
      </div>
    </>
  );
};

export default ProductDetails;
