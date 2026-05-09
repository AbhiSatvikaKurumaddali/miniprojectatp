import { useState } from "react";
import API from "../api";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "Employee"
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      // ✅ Correct path: /api/auth/register
      const res = await API.post("/auth/register", formData);
      setSuccess("Registration successful!");
      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
