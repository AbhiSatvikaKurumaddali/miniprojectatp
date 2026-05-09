import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

// ✅ Define the register endpoint
router.post("/register", registerUser);

export default router;
