import exp from "express";
import {connect} from "mongoose";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {employee} from "./API/employee.js";
import cors from "cors";
const app=exp()
app.use(
  cors({
    origin: ["http://localhost:5173",
            "https://atp-2opl.vercel.app"],
  }),
);
app.use(exp.json())

app.use(cookieParser())
let port=3000
app.use("/employee-api", employee);
async function connectDB(){
    try{
        await mongoose.connect(process.env.DB_url);
        console.log("mongodb connected")
        app.listen(port,()=>console.log(`server running on ${port}`))
        
    }
    catch(err){
        console.log(err)
    }
};
connectDB()
//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
