import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { counterContextObj } from "../context/ContextProvider";
import { useCounterStore } from "../store/CounterStore";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();
let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  console.log("home")
  const {counter,changeCounter}=useContext(counterContextObj)
  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("https://miniprojectatp-1.onrender.com/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj)
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl">Counter:{counter}</h1>
      <button onClick={changeCounter} className="bg-yellow-50 p-5">
        Change
      </button>
      <h1 className="text-4xl">NewCounter:{newCounter}</h1>
      <button onClick={incrementCounter} className="bg-yellow-50 p-5">
        +
      </button>

      <div>
        <h1 className="text-5xl text-center text-gray-600">
          Create New Employee
        </h1>
        {/* form */}
        <form
          className=" max-w-md mx-auto mt-10"
          onSubmit={handleSubmit(onFormSubmit)}
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
            Add Emp
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;
