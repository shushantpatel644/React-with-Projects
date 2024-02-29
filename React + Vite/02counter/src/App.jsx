import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] = useState(15)

  // // let counter =15;

  // const addValue = () =>{
  //   // counter = counter+1;
  //   setCounter(counter+1);
  //   // console.log("value added",counter ); 
    
  // }
  // const removeValue=() =>{
  //   setCounter(counter-1);
  // }
  const addValue = () => {
    // Check if counter is less than 20 before incrementing
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const removeValue = () => {
    // Check if counter is greater than 0 before decrementing
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  }


  return (
    <>
    <h1>Chai Aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button 
    onClick={addValue}>
      Add Value {counter}</button>
    <br />

    <button onClick={removeValue}
    >Remove value{counter} </button>
    </>
  )
}

export default App
