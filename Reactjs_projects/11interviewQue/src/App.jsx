import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App rendered");
   const [value, setValue] = useState(1)
// // const[multipliedValue,setMultipliedValue]=useState(1)

// let multipliedValue= (value * 5)


// const multiplybyfive=()=>{
//   // setMultipliedValue(value * 5)
//   setValue(value + 1)

const clickMe=()=>{
console.log("logged");

}
  return (
    <>
    <h1>Main Value:{value}</h1>
    <button
    // onClick={multiplybyfive}
    onClick={clickMe}
    >Click to multiply by 5</button>

    {/* <h2>Multiplies value:{multipliedValue}</h2> */}
    </>
   
  )
}

export default App
