import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const loadProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async () => {
    try {
      if (!name || qty === "") {
        alert("Please enter product name and quantity");
        return;
      }

      await api.post("/products", {
        name: name.trim(),
        quantity: Number(qty),
      });

      setName("");
      setQty("");
      loadProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add product"
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      <div className="bg-white p-4 rounded shadow w-80 mb-6">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

        <button
          onClick={addProduct}
          className="bg-cyan-600 text-white w-full py-2 rounded hover:bg-cyan-700"
        >
          Add Product
        </button>
      </div>

      <h3 className="font-semibold mb-2">Product List</h3>

      {products.length === 0 && (
        <p className="text-gray-500">No products added</p>
      )}

      {products.map((p) => (
        <div
          key={p._id}
          className="bg-gray-100 p-2 rounded mb-1"
        >
          {p.name} — {p.quantity}
        </div>
      ))}
    </div>
  );
}
