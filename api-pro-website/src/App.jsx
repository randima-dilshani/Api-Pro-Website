import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
