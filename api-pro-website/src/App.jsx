import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/about';
import PricingSection from './pages/pricingsection';
import ApiDocumentation from './pages/apidoc';
import ContactUs from './pages/contactus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/pricingsection" element={<PricingSection />} />
      <Route path="/apidoc" element={<ApiDocumentation />} />
      <Route path="/contactus" element={<ContactUs />} />


    </Routes>
  );
}

export default App;
