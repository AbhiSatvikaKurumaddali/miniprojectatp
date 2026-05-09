import { useState } from "react";
import API from "../api";

export default function EmployeeForm({ onCreated }) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employees", form);
      setForm({ name: "", email: "", role: "" });
      onCreated();
    } catch {
      alert("Failed to add employee");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="border p-2 rounded" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add
      </button>
    </form>
  );
}
