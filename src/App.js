import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/choose-car/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;