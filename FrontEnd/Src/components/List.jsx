import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function List() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  const goToEmployee=(empObj)=>{
    //navigate to employee
    navigate("/Employee",{state:empObj})
  }
   const goToEditEmployee = (empObj) => {
     //navigate to employee
     navigate("/EditEmployee", { state: empObj });
   };
   const deleteEmpById = async (id) => {
     let res = await axios.delete(
       `https://atp-2.onrender.com/employee-api/employee/${id}`,
     );
     if (res.status === 200)
       //get latest emp data
       getEmps();
   };

  //get all emps
    async function getEmps() {
      let res = await fetch("https://atp-2.onrender.com/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
//get all emps on component loading
useEffect(()=>{
  getEmps();
},[]);


  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p>{empObj.firstName}</p>
            {/*3 buttons*/}
            <div className="flex justify-around">
              <button
                className="bg-green-600 p-2 rounded-2xl text-white"
                onClick={() => goToEmployee(empObj)}
              >
                Veiw
              </button>
              <button
                className="bg-blue-600 p-2 rounded-2xl text-white"
                onClick={() => goToEditEmployee(empObj)}
              >
                Edit
              </button>
              <button className="bg-red-600 p-2 rounded-2xl text-white" onClick={() => deleteEmpById(empObj._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;