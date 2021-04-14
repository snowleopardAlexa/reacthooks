import React from 'react';
import './App.css';
import Counter from './Counter';
import Clicker from './Clicker';
import Movies from './Movies';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <Counter />
      <Clicker />
      <Movies />
      <Toggler />
    </div>
  );
}

export default App;
