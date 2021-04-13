import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => setCount(count +1)}>Add</button>
    </div>
  );
}

export default Counter;