import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "employee" }
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);
