import React from 'react';
import Home from '../home/Home';
import NextHome from '../nexthome/NextHome';
import './App.css';

import PieChart from '../piechart/PieChart';

function App() {
  return (
    <div className="App">
      <Home />
      <br/>
      <br/>
      <NextHome/>
      <br/>
      <br/>
      <PieChart/>
    </div>
  );
}

export default App;
