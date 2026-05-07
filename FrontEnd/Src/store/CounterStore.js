import {create} from 'zustand'
//create store
 export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    //add user state (name,email,age)
    user:{name:"ravi",email:"ravi@gmail.com",age:20},
    //function to change email
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"sravanya",age:23}),
    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    //decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    //reset:()=>set({newCounter:0})
    //function to change newCounter to 500
    reset:()=>set({newCounter:500}),
    //function to decrement newCounter by  20
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-20}))
 }))