import ProductCard from "./ProductCard"; // make sure this path is correct

const ProductGrid = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
