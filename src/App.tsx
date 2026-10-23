import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import StorySection from './components/StorySection';
import PricingSection from './components/PricingSection';
import TrustSection from './components/TrustSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <StorySection />
        <PricingSection />
        <TrustSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
