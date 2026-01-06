import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="border p-2 w-full mb-4" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={login} className="bg-indigo-600 text-white w-full py-2 rounded">Login</button>
      </div>
    </div>
  );
}
