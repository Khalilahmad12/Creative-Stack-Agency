import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/hero/HeroSection';
import { Services } from './components/sections/services/ServicesSection';
import { Portfolio } from './components/sections/portfolio/PortfolioSection';
import { Capabilities } from './components/sections/capabilities/CapabilitiesSection';
import { TeamSection } from './components/sections/team/TeamSection';
import { Contact } from './components/sections/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { DynamicIcon } from './components/common/DynamicIcon';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Keep it strictly light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('pms_theme', 'light');
  }, []);

  // Intersection Observer to highlight the active section dynamically
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'capabilities', 'team', 'contact'];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px' // Detect when the section is centered
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  // Show Scroll to Top Button after scroll limit
  useEffect(() => {
    const handleScrollButton = () => {
      // Direct comparison before setting state to minimize re-renders
      const shouldShow = window.scrollY > 400;
      setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
    };
    window.addEventListener('scroll', handleScrollButton, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-red-500 selection:text-white overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navbar Header */}
      <Navbar
        activeSection={activeSection}
      />

      {/* Hero Banner Section */}
      <Hero />

      {/* Services Grid Showcase */}
      <Services onSelectService={setSelectedService} />

      {/* Portfolio Filter Showcases */}
      <Portfolio />

      {/* Capabilities Block */}
      <Capabilities />

      {/* Team Section Block */}
      <TeamSection />

      {/* Contact & Estimator Section */}
      <Contact selectedService={selectedService} />

      {/* Corporate Footer Block */}
      <Footer />

      {/* Scroll to Top Floating CTA Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white shadow-2xl hover:bg-red-700 active:bg-red-800 hover:-translate-y-1 hover:scale-105 active:scale-95 border border-red-500/30 transition-all duration-300 cursor-pointer animate-[bounce_3s_infinite]"
          aria-label="Scroll to top of the screen"
        >
          <DynamicIcon name="ArrowUp" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
