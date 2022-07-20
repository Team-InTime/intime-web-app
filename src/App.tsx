import React from 'react';
import clock from './assets/logos/clock.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <p>
         Welcome InTime Project
        </p>

        <DatePicker />

        <Button className='mt-5' type="primary">Primary Button</Button>
      </header>
    </div>
  );
}

export default App;
