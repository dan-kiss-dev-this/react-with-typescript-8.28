import React from 'react';
import './App.css';
import Counter from './Counter'
import CounterSimple from './CounterSimple'
import TypesOfComponents from './TypesOfComponents'
import { TextField } from './TextField'

function App() {
  return (
    <div className="App">
      <CounterSimple name="John" />
      <TypesOfComponents name="Mike" />
      <TextField text='hi' />
      <Counter>
        {(count: number) => (
          <div>Hello {count}</div>)}
      </Counter>
    </div>
  );
}

export default App;
