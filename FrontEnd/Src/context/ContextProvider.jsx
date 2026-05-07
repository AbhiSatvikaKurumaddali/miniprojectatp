import { createContext, useState } from 'react';
//create context provider object
export const counterContextObj=createContext()
function ContextProvider({children}) {
    //state

    const [counter,setcounter]=useState(10)
    //function to change state
    const changeCounter=()=>{
        setcounter(counter+1)
    }
    console.log("counter")
  return (
    <counterContextObj.Provider value={{counter,changeCounter}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider