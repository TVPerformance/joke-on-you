import 'https://v2.jokeapi.dev/joke/Programming?amount=10';
import './App.scss';
import MyComponent from './Components/my';
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
