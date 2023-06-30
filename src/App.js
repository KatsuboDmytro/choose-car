import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NewCar } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/choose-car/" element={<Home />} />
        <Route path="/choose-car/new" element={<NewCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;