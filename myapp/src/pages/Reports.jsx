import { useState } from "react";
import api from "../api";

export default function Reports() {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);

  const loadReport = async () => {
    try {
      if (!date) {
        alert("Please select a date");
        return;
      }

      const res = await api.get(`/reports/date?date=${date}`);
      setRecords(res.data);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "No records found for this date"
      );
      setRecords([]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Reports (Date-wise)
      </h2>

      {/* Date Selector */}
      <div className="bg-white p-4 rounded shadow w-96 mb-6">
        <input
          type="date"
          className="border p-2 w-full mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button
          onClick={loadReport}
          className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {/* Report Table */}
      {records.length === 0 ? (
        <p className="text-gray-500">
          No records to display
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">
                  Product
                </th>
                <th className="border px-4 py-2">
                  Type
                </th>
                <th className="border px-4 py-2">
                  Quantity
                </th>
                <th className="border px-4 py-2">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r._id}>
                  <td className="border px-4 py-2">
                    {r.productName}
                  </td>
                  <td
                    className={`border px-4 py-2 font-semibold ${
                      r.type === "IN"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {r.type}
                  </td>
                  <td className="border px-4 py-2">
                    {r.quantity}
                  </td>
                  <td className="border px-4 py-2">
                    {r.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
