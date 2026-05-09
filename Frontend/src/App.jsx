import { useState } from "react";
import Register from "./pages/Register";
import Employees from "./pages/Employees";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div>
      {loggedIn ? (
        <Employees onLogout={() => setLoggedIn(false)} />
      ) : (
        <Register onRegistered={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
