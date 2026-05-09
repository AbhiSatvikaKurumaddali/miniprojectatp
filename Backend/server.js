import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

dotenv.config();
const app = express();


app.use(cors({
  origin: "https://miniprojectatp-2.onrender.com", // Your FRONTEND URL
  credentials: true
}));

app.use(express.json());

// ✅ Using MONGO_URI (matches your .env variable name)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
