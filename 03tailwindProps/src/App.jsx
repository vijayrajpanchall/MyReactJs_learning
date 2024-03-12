import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0);
  // let myObj = {
  //   name: "John",
  //   age: 30,
  // };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Vijay" />
      <Card username="Panchal" />
    </>
  );
}

export default App
