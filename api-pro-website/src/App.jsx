import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about';
import PricingSection from './pages/pricingsection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/pricingsection" element={<PricingSection />} />

    </Routes>
  );
}

export default App;
