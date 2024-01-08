import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <button>+</button>
      <h1>{count}</h1>
      <button>-</button>
      
    </div>
  )
}

export default App

