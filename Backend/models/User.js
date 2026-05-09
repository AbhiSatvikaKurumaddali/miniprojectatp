import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["employee", "admin"], default: "employee" }
});

export default mongoose.model("User", userSchema);
