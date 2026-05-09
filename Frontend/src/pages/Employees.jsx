import { useEffect, useState } from "react";
import API from "../api";
import EmployeeForm from "../components/EmployeeForm.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Employees({ onLogout }) {
  const [employees, setEmployees] = useState([]);
  const role = localStorage.getItem("role");

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch {
      alert("Failed to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await API.delete(`/employees/${id}`);
      fetchEmployees();
    } catch {
      alert("Failed to delete employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLogout={onLogout} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        {role === "admin" && <EmployeeForm onCreated={fetchEmployees} />}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Role</th>
                {role === "admin" && <th className="border p-3">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr key={emp._id} className="hover:bg-gray-100">
                    <td className="border p-3">{emp.name}</td>
                    <td className="border p-3">{emp.email}</td>
                    <td className="border p-3">{emp.phone}</td>
                    <td className="border p-3">{emp.role}</td>
                    {role === "admin" && (
                      <td className="border p-3">
                        <button
                          onClick={() => deleteEmployee(emp._id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={role === "admin" ? 5 : 4} className="text-center p-4">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
