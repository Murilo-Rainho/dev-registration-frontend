import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Homepage,
  ListDevs,
  ListLevels,
} from './pages/';

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
