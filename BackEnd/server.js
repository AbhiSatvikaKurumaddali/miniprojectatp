import exp from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { employee } from "./API/employee.js";
import cors from "cors";

const app = exp();

// middleware
app.use(exp.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/employee-api", employee);

const port = 3000;

// connect to MongoDB directly (no env vars)
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://kurumaddali1201_db_user:AbhiSatvika@cluster0.vtf8kmj.mongodb.net/mydatabase"
    );
    console.log("✅ MongoDB connected");
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

connectDB();

// error handling middleware
app.use((err, req, res, next) => {
  console.error("err in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
