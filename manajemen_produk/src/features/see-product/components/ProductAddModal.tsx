import React, { useState } from "react";
import type { Product } from "../types";

interface Props {
  products: Product[];
  onClose: () => void;
  reloadProjects: () => void;
}

const ProductAddModal: React.FC<Props> = ({ products,onClose, reloadProjects }) => {
  const [name, setName] = useState("");
  const [harga, setHarga] = useState(0);
  const [stok, setStok] = useState(0);
  const [error, setError] = useState("");

  // append products
  const handleAdd = () => {
    const filteredOptions = products.filter((prod) =>
      name.toLowerCase().includes(prod.name.toLowerCase())
    );
    if (name == "" || harga == 0 || stok == 0){
      setError("Nama, harga, stok Tidak Boleh Kosong!")
    }
    else if (filteredOptions.length > 0) {
      setError("nama Tidak Boleh sama!");
    }
    else if(harga < 0 || stok < 0){
      setError("harga, stok Tidak Boleh negatif!")
    }
    else{    
    let newProduct = {} as Product;
    newProduct.id = products.length + 1;
    newProduct.name = name;
    newProduct.price = harga;
    newProduct.stock = stok;
    newProduct.image = "https://s1.kaercher-media.com/images/pim/1098323_det_04502x502.jpg";
    products.push(newProduct);
    reloadProjects();
    onClose();}
  };
  if (error) return <div className="text-red-500 p-6">{error}</div>;
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
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Nama</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border-gray-300 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Harga</label>
              <input
                id="harga"
                name="harga"
                type="number"
                required
                placeholder="Enter your product Harga"
                value={harga}
                onChange={(e) => setHarga(parseFloat(e.target.value))}
                className="mt-1 w-full rounded-md border-gray-300 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Stok</label>
              <input
                id="stok"
                name="stok"
                type="number"
                required
                placeholder="Enter your product stok"
                value={stok}
                onChange={(e) => setStok(parseFloat(e.target.value))}
                className="mt-1 w-full rounded-md border-gray-300 bg-gray-100"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="shadow p-3 rounded-xl hover:text-gray text-green font-medium text-sm text-center"
        >
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default ProductAddModal;
