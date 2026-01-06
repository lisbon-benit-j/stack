import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-teal-700 to-cyan-700 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-lg font-semibold tracking-wide">
        Stock Management
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-1.5 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
