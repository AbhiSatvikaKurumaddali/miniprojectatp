import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET all employees (all registered users)
router.get("/", async (req, res) => {
  try {
    const employees = await User.find({}, "username email phone role");
    res.json(
      employees.map(u => ({
        _id: u._id,
        name: u.username,
        email: u.email,
        phone: u.phone,
        role: u.role
      }))
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE employee
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
