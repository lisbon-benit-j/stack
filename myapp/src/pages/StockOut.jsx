import { useEffect, useState } from "react";
import api from "../api";

export default function StockOut() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  
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

      await api.post("/stock/out", {
        name,
        quantity: Number(qty),
      });

      alert("Stock removed successfully");

      setQty("");
      loadProducts(); 
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Stock Out failed"
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Stock Out
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
              {p.name} (Available: {p.quantity})
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
          className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          Stock Out
        </button>
      </div>
    </div>
  );
}
