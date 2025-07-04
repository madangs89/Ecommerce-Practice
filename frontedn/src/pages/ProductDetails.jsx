import ProductGrid from "../component/ProductGrid";
import SectionHeader from "../component/SectionHeader";

const ProductDetails = () => {
  const product = {
    id: 1,
    title: "NoiseFit Nova Smartwatch",
    description:
      "Experience the perfect blend of fashion and technology with the NoiseFit Nova Smartwatch. Packed with fitness tracking, notifications, and a stunning display.",
    price: 2999,
    image:
      "https://sp.yimg.com/ib/th/id/OIP.xvc_QaTXDEPUILdjWyMsZgAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    rating: 4.5,
  };

  return (
    <>
      <div className="max-w-9xl mt-10 mx-auto  py-10 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[500px] object-contain rounded-xl shadow"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="text-xl font-bold text-blue-600 mb-2">
            ₹ {product.price}
          </div>

          <div className="text-yellow-500 text-sm mb-6">
            {"★".repeat(Math.round(product.rating)) +
              "☆".repeat(5 - Math.round(product.rating))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <SectionHeader title="Related Products" subtitle="You might also like" />
      {/* Related Products */}
     <div className="max-w-9xl px-10"> 
      <ProductGrid products={[product,product,product,product,product,product,product,product]} />
     
     </div>
    </>
  );
};

export default ProductDetails;
