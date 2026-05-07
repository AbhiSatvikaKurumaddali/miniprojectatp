import exp from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { employee } from "./API/employee.js";
import cors from "cors";

config();

const app = exp();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(exp.json());
app.use(cookieParser());

let port = process.env.PORT || 3000;

app.use("/employee-api", employee);


async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL); 
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
}
connectDB();


app.use((err, req, res, next) => {
  console.log("Error in middleware:", err.message);
  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
