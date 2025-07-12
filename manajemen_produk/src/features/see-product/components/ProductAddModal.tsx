import React, { useState } from "react";

interface Props {
  onClose: () => void;
  reloadProjects: () => void;
}

const ProductAddModal: React.FC<Props> = ({
  onClose,
  reloadProjects,
}) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Tambahkan Product</h3>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddModal;
