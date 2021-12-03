import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ListDevs from './pages/ListDevs';
import ListLevels from './pages/ListLevels';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/dev" element={ <ListDevs /> } />
        <Route exact path="/level" element={ <ListLevels /> } />
      </Routes>
    </div>
  );
}

export default App;
