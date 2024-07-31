import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import React from 'react';

function App() {
  const[count,setCount] =useState(0)

  useEffect(()=>{
    console.log("Component created:")
  },[])        

  function updateCount(){
    setCount(count+1)
  }

  return (

    <>
   <p>
    Learning React....
   </p>
   <h1>button click no of times:{count}</h1>
   <button
   onClick={updateCount}
   >Click</button>
   <button></button>
   </>
  );

}
export default App;
