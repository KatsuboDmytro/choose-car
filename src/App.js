import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Edit, NewCar } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/new" element={<NewCar />} />
      </Routes>
    </Router>
  );
}

export default App;
