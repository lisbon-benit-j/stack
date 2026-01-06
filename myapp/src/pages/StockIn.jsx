import { useEffect, useState } from "react";
import api from "../api";

export default function StockIn() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  // Load products for dropdown
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      alert("Failed to load products");
    }
  };

  
  const submit = async () => {
    try {
      if (!name || qty === "") {
        alert("Please select product and quantity");
        return;
      }

      await api.post("/stock/in", {
        name,
        quantity: Number(qty),
      });

      alert("Stock added successfully");

      setQty("");
      loadProducts(); 
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Stock In failed"
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Stock In
      </h2>

      <div className="bg-white p-4 rounded shadow w-96">
        
        <select
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p._id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>

        
        <input
          type="number"
          className="border p-2 w-full mb-4"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />

      
        <button
          onClick={submit}
          className="bg-emerald-600 text-white w-full py-2 rounded hover:bg-emerald-700"
        >
          Stock In
        </button>
      </div>
    </div>
  );
}
