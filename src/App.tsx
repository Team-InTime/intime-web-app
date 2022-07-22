import React from 'react';
import clock from './assets/logos/clock.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppRoutes/>
  );
}

export default App;
