import React from 'react';
import clock from './assets/logos/clock.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <p>
         Welcome InTime Project
        </p>
      </header>
    </div>
  );
}

export default App;
