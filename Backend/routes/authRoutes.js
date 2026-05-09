import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});


export default router;
