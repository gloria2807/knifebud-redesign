import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductSection from './components/ProductSection';
import HowItWorks from './components/HowItWorks';
import SarahSection from './components/SarahSection';
import KnifeSharpening from './components/KnifeSharpening';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <HowItWorks />
        <SarahSection />
        <KnifeSharpening />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

function CatalogPage() {
  return (
    <>
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '');

  if (path === '/catalog') {
    return <CatalogPage />;
  }

  return <HomePage />;
}

export default App;