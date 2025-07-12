import React, { useState } from "react";
import type { Product } from "../types";
import ProductEditModal from "./ProductEditModal";
import ProductDeleteModal from "./ProductDeleteModal";
import { formatCurrency } from "../../../utils/formatter";

interface Props {
  product: Product;
  products: Product[];
  reloadProjects: () => void;
}

const ProductCard: React.FC<Props> = ({
  product,
  products,
  reloadProjects,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    setIsDelete(true);
  };

  return (
    <div className="justify-items-center shadow rounded-2xl p-3">
      <div>
        <img src={product.image} alt="" height={150} width={150} />
      </div>
      <div>
        <span className="text-gray-600 font-bold text-xl">{product.name}</span>
      </div>
      <div>
        <span className="text-gray-600">{formatCurrency(product.price)}</span>
      </div>
      <div>
        <span className="text-gray-600">{product.stock}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded bg-blue-400 px-3 text-center">
          <button
            onClick={handleEdit}
            className="text-white hover:text-gray font-medium text-sm"
          >
            Edit
          </button>
        </div>

        <div className="rounded bg-red-400 px-3">
          <button
            onClick={handleDelete}
            className="text-white hover:text-gray font-medium text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {isEdit && (
        <ProductEditModal
          product={product}
          products={products}
          onClose={() => setIsEdit(false)}
          reloadProjects={reloadProjects}
        />
      )}

      {isDelete && (
        <ProductDeleteModal
          product={product}
          products={products}
          onClose={() => setIsDelete(false)}
          reloadProjects={reloadProjects}
        />
      )}
    </div>
  );
};

export default ProductCard;
