import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)
  // let counter=15
  // counter variable
  // setCounter function is responsible for updating counter

  const addValue=()=>{
   
    //counter=counter + 1
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(Precounter=>Precounter+1)
    // both are diff

    // setCounter(counter=>counter+1) to increase value into 3,4,5,6 upto so many , thats why use same line
    // console.log("Clicked",counter);
  }

  const removeValue=() =>{
    setCounter(counter - 1)
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value{counter}</button>
     <br />
     <button onClick={removeValue}
     >remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
