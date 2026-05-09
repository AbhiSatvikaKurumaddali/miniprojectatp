import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();

app.use(express.json());


app.use(cors({
  origin: "https://miniprojectatp-2.onrender.com"
}));


app.get("/api/employees", (req, res) => {
  res.json({ message: "Employees list working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
