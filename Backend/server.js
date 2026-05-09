import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"; // ✅ import your auth routes

dotenv.config();
const app = express();

app.use(express.json());

// Allow your frontend domain
app.use(cors({
  origin: "https://miniprojectatp-2.onrender.com"
}));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// ✅ Mount the auth routes here
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
