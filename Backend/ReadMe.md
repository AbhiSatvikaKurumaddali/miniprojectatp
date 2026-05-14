Backend/
│── config/
│   ├── Database/
│   └── db.js
│
│── controllers/
│   ├── authController.js
│   └── employeeController.js
│
│── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│
│── models/
│   ├── User.js
│   └── Employee.js
│
│── routes/
│   ├── authRoutes.js
│   └── employeeRoutes.js
│
│── .env
│── package.json
│── package-lock.json
│── request.http
│── server.js
│── README.md

------------------------------------------------
Node.js – Runtime environment

Express.js – Web framework

MongoDB + Mongoose – Database & ODM

JWT (jsonwebtoken) – Authentication

bcryptjs – Password hashing

dotenv – Environment configuration

cors – Cross-origin resource sharing

nodemon – Development auto-restart


--------------------------------------------------
npm install

npm run dev

----------------------------------------------------------
Auth Routes (/api/auth)
POST /register → Register new user

POST /login → Login user & get JWT

--------------------------------------------------------------

Employee Routes (/api/employees)
GET / → Get all employees

POST / → Add new employee

GET /:id → Get employee by ID

PUT /:id → Update employee

DELETE /:id → Delete employee

----------------------------------------------------------------

Middleware
authMiddleware.js → Verifies JWT tokens

errorMiddleware.js → Handles errors gracefully
