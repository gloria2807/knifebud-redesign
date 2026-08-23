import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductSection from './components/ProductSection';
import HowItWorks from './components/HowItWorks';
import SarahSection from './components/SarahSection';
import KnifeSharpening from './components/KnifeSharpening';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <HowItWorks />
      <SarahSection />
      <KnifeSharpening />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;