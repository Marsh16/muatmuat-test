import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, type Product } from "../types";
import ProductAddModal from "../components/ProductAddModal";
import useDebouncedEffect from "../../../utils/useDebouncedEffect";

const SeeProductPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [isDrop, setIsDrop] = useState(false);

  const handleIsDrop = () => {
    if (isDrop) {
      setIsDrop(false);
    } else {
      setIsDrop(true);
    }
  };

  useDebouncedEffect(() => {
    const filtered = products.filter(item =>
			item.name.includes(search)
		);
		setProducts(filtered);
  }, [search], 300);

  useEffect(() => {
    if (search) {
      setProducts(
        products.filter(
          (option) =>
            option.name &&
            option.name.includes(search)
        )
      );
    } else if (products) loadProducts();
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

      <div className="w-full p-3">
        <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Something..."
            onClick={(e) => e.stopPropagation()}
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>
      </div>

      <div className="w-full p-3">
        <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto">
          <button onClick={handleIsDrop}>Select a Price</button>
        </div>
      </div>

      {isDrop && (
        <div className="w-full p-3">
          <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto">
            <ul>
              {products.map((option) => (
                <li
                  key={option.id}
                  className={`px-2 py-1 cursor-pointer hover:bg-blue-50`}
                  // onClick={() => onSelect(option.id)}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-1 flex-shrink-0">
                      <span className="font-bold text-gray-600 text-xs">
                        {option.name.charAt(0)}
                      </span>
                    </div>
                    <div className="truncate min-w-0">
                      <div className="font-medium text-sm truncate">
                        {option.name}
                      </div>
                      {option.price && (
                        <div className="text-xs text-gray-500 truncate">
                          {option.price}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* When loading */}
      {isLoading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {/* When Error */}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {/* When no product yet and there is project*/}
      {!isLoading && products.length === 0 && (
        <div className="text-center text-gray-500 py-8">No products yet</div>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            products={products}
            reloadProjects={loadProducts}
            // onChange ={loadProducts}
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
