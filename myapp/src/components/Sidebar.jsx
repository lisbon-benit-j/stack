import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-teal-900 to-slate-900 text-slate-200 p-5">
      
      <h2 className="text-white font-semibold mb-6 tracking-wide">
        MENU
      </h2>

      <ul className="space-y-3 text-sm">

        <li
          onClick={() => navigate("/dashboard")}
          className="p-2 rounded-lg hover:bg-cyan-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          Dashboard
        </li>

        <li
          onClick={() => navigate("/products")}
          className="p-2 rounded-lg hover:bg-cyan-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          Products
        </li>

        <li
          onClick={() => navigate("/stockin")}
          className="p-2 rounded-lg hover:bg-cyan-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          Stock In
        </li>

        <li
          onClick={() => navigate("/stockout")}
          className="p-2 rounded-lg hover:bg-cyan-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          Stock Out
        </li>

        {/* REPORTS */}
        <li
          onClick={() => navigate("/reports")}
          className="p-2 rounded-lg hover:bg-cyan-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          Reports
        </li>

      </ul>
    </div>
  );
}
