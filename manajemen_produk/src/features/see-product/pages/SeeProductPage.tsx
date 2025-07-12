import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, type Product } from "../types";
import ProductAddModal from "../components/ProductAddModal";

const SeeProductPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProducts, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (products) loadProducts();
  }, [products]);

  const loadProducts = () => {
    setIsLoading(true);
    try {
      const products = PRODUCTS;
      setProducts(products);
    } catch (err) {
      console.error(err);
      setError("Failed to load pending products");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      {/* Title */}
      <h3 className="text-xl font-bold mb-6 text-center">
        Product Selling Here
      </h3>
      <div className="flex flex-row justify-center items-center m-4">
        <button
        className="shadow p-3 rounded-xl hover:text-gray text-green font-medium text-sm text-center"
        onClick={() => setIsAdd(true)}
      >
        Tambahkan Product
      </button>
      </div>
      
      {/* When loading */}
      {isLoading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {/* When Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {/* When no product yet and there is project*/}
      {!isLoading && PRODUCTS.length === 0 && (
        <div className="text-center text-gray-500 py-8">No products yet</div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
            reloadProjects={loadProducts}
          />
        ))}
      </div>
      {/* show modal */}
      {isAdd && (
        <ProductAddModal
          products={products}
          onClose={() => setIsAdd(false)}
          reloadProjects={loadProducts}
        />
      )}
    </div>
  );
};

export default SeeProductPage;
