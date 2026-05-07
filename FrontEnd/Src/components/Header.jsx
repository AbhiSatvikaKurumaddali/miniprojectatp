import {NavLink} from 'react-router'

function Header() {
  return (
      <nav className="text-2xl text-white p-4 bg-gray-500 gap-3">
        <ul className="flex justify-end gap-3 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/CreateEmp">CreateEmp</NavLink>
          </li>
          <li>
            <NavLink to="/List">Employees</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Header