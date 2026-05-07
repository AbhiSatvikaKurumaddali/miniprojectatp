import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router';
import { useEffect,useState } from 'react';
import axios from 'axios';



function EditEmployee() {
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  const {
      register,
      handleSubmit,
      formState:{errors},
      setValue,
    } = useForm();
    //get empObj from navigate Hook
    const { state }=useLocation();

    useEffect(()=>{
        setValue("firstName",state.firstName);
        setValue("lastName", state.lastName);
        setValue("email", state.email);
        setValue("mobile", state.mobile);
        setValue("designation", state.designation);
        setValue("company", state.company);
    },);

    const navigate=useNavigate()
    const saveModifiedEmp=async (modifiedEmp) =>
    {
      try {
        //console.log(modifiedEmp);
        const res = await axios.put(
          `https://miniprojectatp-1.onrender.com/employee/${state._id}`,modifiedEmp,
        );
        if (res.status === 200) {
          //navigate to list of emp
          navigate("/List");
        }
         else {
          let errorRes = await res.json();
          console.log("error responce is ", errorRes);
          throw new Error(errorRes.reason);
        }
      }
      catch (err) {
        console.log("err in catch", err);
        //deal with err
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
     console.log(error);

     if (loading) {
       return <p className="text-center text-4xl">Loading....</p>;
     }
     if (error) {
       return <p className="text-red-500 text-center text-3xl">{error}</p>;
     }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">
        Edit Employee
      </h1>
      {/* form */}
      <form
        className=" max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter first name "
          {...register("firstName")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter last name "
          {...register("lastName")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border  p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("company")}
          className="mb-3 border  p-3 w-full rounded-2xl"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};
    


export default EditEmployee
