import React from "react";
import type { Product } from "../types";

interface Props {
  product: Product;
  products: Product[];
  onClose: () => void;
  reloadProjects: () => void;
}

const ProductDeleteModal: React.FC<Props> = ({
  product,
  products,
  onClose,
  reloadProjects,
}) => {

  const handleDelete = () => {
    products.splice(product.id, 1);
    reloadProjects();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Delete Product?</h3>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <button
          onClick={handleDelete}
          className="shadow p-3 rounded-xl hover:text-gray text-green font-medium text-sm text-center"
        >
          Yes, Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
