import exp from "express";
import { employeeModel } from "../employeeModel.js";
import jwt from "jsonwebtoken";

const { sign } = jwt;
export const employee = exp.Router();

employee.post("/employee", async (req, res, next) => {
  try {
    const newEmployee = new employeeModel(req.body);
    const result = await newEmployee.save();
    res.status(201).json({ message: "employee created", payload: result });
  } catch (err) {
    next(err);
  }
});


employee.get("/employees", async (req, res, next) => {
  try {
    let employeeList = await employeeModel.find();
    res.status(200).json({ payload: employeeList });
  } catch (err) {
    next(err);
  }
});


employee.put("/employee/:id", async (req, res, next) => {
  try {
    const modifiedEmp = req.body;
    let updatedEmp = await employeeModel.findByIdAndUpdate(
      req.params.id,
      { $set: { ...modifiedEmp } },
      { returnDocument: "after" }
    );
    if (!updatedEmp) {
      return res.status(404).json({ message: "emp not found" });
    }
    res.status(200).json({ message: "employee updated", payload: updatedEmp });
  } catch (err) {
    next(err);
  }
});


employee.delete("/employee/:id", async (req, res, next) => {
  try {
    let deletedEmp = await employeeModel.findByIdAndDelete(req.params.id);
    if (!deletedEmp) {
      return res.status(404).json({ message: "emp not found" });
    }
    res.status(200).json({ message: "employee deleted", payload: deletedEmp });
  } catch (err) {
    next(err);
  }
});
