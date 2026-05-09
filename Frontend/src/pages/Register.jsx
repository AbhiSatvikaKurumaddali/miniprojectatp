import { useState } from "react";
import API from "../api";

export default function Register({ onRegistered }) {
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, phone, password, role });
      const loginRes = await API.post("/auth/login", { username, password });
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("role", role);
      onRegistered(); // ✅ go straight to Employees page
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input className="w-full p-2 mb-3 border rounded" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input className="w-full p-2 mb-3 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full p-2 mb-3 border rounded" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
        <input type="password" className="w-full p-2 mb-3 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <select className="w-full p-2 mb-3 border rounded" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
}
