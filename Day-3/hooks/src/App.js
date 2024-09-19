import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);  
  }

  const decrement = () => {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log("Component Mounted");
  }
  ,[count]);


  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
