import React from "react";
import type { Product } from "../types";

interface Props {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <div className="justify-items-center shadow rounded-2xl p-3">
      <div>
        <img src={product.image} alt="" height={150} width={150} />
      </div>
      <div>
        <span className="text-gray-600 font-bold text-xl">{product.name}</span>
      </div>
      <div>
        <span className="text-gray-600">{product.price}</span>
      </div>
      <div>
        <span className="text-gray-600">{product.stock}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded bg-blue-400 px-3 text-center">
          <button
            onClick={onClick}
            className="text-white hover:text-gray font-medium text-sm"
          >
            Edit
          </button>
        </div>

        <div className="rounded bg-red-400 px-3">
          <button
            onClick={onClick}
            className="text-white hover:text-gray font-medium text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
