import { useState } from 'react'

import './App.css'

function App() {
const [num, setNum] = useState(0);
const increase =() => setNum(num + 1);
const decrease =() => setNum(num - 1);
const reset = () => setNum(0);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
