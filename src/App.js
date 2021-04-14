import React from 'react';
import './App.css';
import Counter from './Counter';
import Clicker from './Clicker';
import Movies from './Movies';
import Toggler from './Toggler';
import FormHooks from './FormHooks';
import FormInputHooks from './FormInputHooks';

function App() {
  return (
    <div className="App">
      <Counter />
      <Clicker />
      <Movies />
      <Toggler />
      <FormHooks />
      <FormInputHooks />
    </div>
  );
}

export default App;
