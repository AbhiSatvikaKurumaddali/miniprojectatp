
import {Schema,model} from 'mongoose'
const employeeSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"firstname is required"]
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email should be unique"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile is required"]
    },
    designation:{
        type:String
    },
    company:
    {
        type:String,
        required:[true,"company name required"]
    }
},
{
    versionKey:false,
    timeStamp:true
})
export const employeeModel=model("employee",employeeSchema)