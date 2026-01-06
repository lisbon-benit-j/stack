import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  const lowStock = products.filter(p => p.quantity < 10).length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

      <div className="grid grid-cols-4 gap-4">
        <Card title="Total Products" value={products.length} />
        <Card title="Low Stock Alert" value={lowStock} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
