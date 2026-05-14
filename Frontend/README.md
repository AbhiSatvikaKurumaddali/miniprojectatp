Frontend/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── EmployeeForm.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Employees.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── api.jsx
│   ├── index.css
│   └── main.jsx
│
│── .env
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── vite.config.js
│── README.md

---------------------

React 19 – UI library

React Router v7 – Routing & navigation

Axios – API requests

Tailwind CSS (via @tailwindcss/vite) – Styling framework

Vite – Fast build tool & dev server

ESLint – Linting & code quality

------------------------------------
npm install

npm run dev

------------------------------------------

All API calls are centralized in src/api.jsx using Axios.

Backend endpoints (e.g., /api/auth, /api/employees) are consumed here.

Environment variable VITE_API_URL ensures flexibility between dev/prod.

----------------------------------------------------
Use the backend’s request.http  to verify API responses.

Frontend pages (Login, Register, Employees) are wired to backend routes.
