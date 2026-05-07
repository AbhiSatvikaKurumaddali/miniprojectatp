import {useContext} from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Home() {
  //call useCounterStore hook to get state of zustand store
  let newCounter=useCounterStore((state)=>state.newCounter);
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  console.log("home")
  const {counter,changeCounter}=useContext(counterContextObj)
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
    </div>
  );
}

export default Home