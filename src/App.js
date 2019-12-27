import React from 'react';
import logo from './logo.svg';
import './App.css';
// components:
import List from './List';
import Parking from './Parking'

function App() {
  return (
    <div>
      <Parking pX={200} pY={200} lotX={70} lotY={50}/>
    </div>
  );
}

export default App;
