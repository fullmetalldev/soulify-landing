import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <HowWeWorkSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
