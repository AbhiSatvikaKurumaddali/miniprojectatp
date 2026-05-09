export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Employee Management</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          onLogout(); // ✅ triggers App to show Register again
        }}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
