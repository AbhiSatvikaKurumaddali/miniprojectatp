import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());


app.use(cors({
  origin: "https://miniprojectatp-2.onrender.com"
}));

// Example route
app.post("/api/auth/register", (req, res) => {
  const { name, email, phone, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  // TODO: Save user to DB (MongoDB)
  res.status(201).json({ message: "User registered successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
