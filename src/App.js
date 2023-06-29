import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, Edit, NewCar } from './pages';

function App() {
  return (
    <HashRouter hashType="hashbang">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/new" element={<NewCar />} />
      </Routes>
    </HashRouter>
  );
}

export default App;