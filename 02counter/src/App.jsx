import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("clicked", counter);
    counter += 1;
    setCounter(counter);
  }

  const subValue = () => {
    console.log("clicked", counter);
    if(counter > 0){
      counter -= 1;
      setCounter(counter);  
    } else {
      console.log("Can not decrease value");
    }
  }
  
  return (
    <>
    <h1>Counter</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Increment</button>

    <br />
    <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
