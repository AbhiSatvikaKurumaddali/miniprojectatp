import exp from "express"
import {employeeModel} from "../employeeModel.js"
//import {verifiedToken} from "middleware.js"
import jwt from 'jsonwebtoken'
const {sign}=jwt
export const employee=exp.Router()
//route to create employee
employee.post('/employee',async(req,res)=>{
    const employee1=req.body
    //to create new user document
    const newEmployee=new employeeModel(employee1)
    //save the document
    const result=await newEmployee.save()
    res.status(201).json({message:"employee created"})
})
//route to read all employee
employee.get('/employees',async(req,res)=>{
    let employeeList=await employeeModel.find()
    res.status(200).json({payload:employeeList})
})
//route to edit employee by id
employee.put("/employee/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});
//route to delete employee
employee.delete("/employee/:id", async (req, res) => {
  let deletedEmp = await employeeModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});