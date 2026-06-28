import { useState, useEffect } from 'react';
import { DynamicIcon } from '../common/DynamicIcon';

export function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    // Immediately release the scroll lock on the DOM so that the browser can execute the scroll
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.documentElement.style.overflow = '';

    setIsMobileMenuOpen(false);

    // Defer the scrolling slightly to ensure React has updated the state and the DOM has fully unlocked
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-300 ${
        isScrolled
          ? 'bg-white/95 text-neutral-900 shadow-md border-b border-neutral-200/50 backdrop-blur-md py-3'
          : 'bg-transparent text-neutral-900 py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative h-10 w-10 flex items-center justify-center bg-red-600 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
            <img
              src="https://khalilahmad12.github.io/agency-images/creative_stack_logo_1782645912215.jpeg"
              alt="Creative Stack Agency Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-xl uppercase leading-none text-red-500">
              Creative Stack
            </span>
            <span className="text-[10px] tracking-widest text-neutral-500 font-semibold uppercase">
              Agency
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-red-500 relative py-1 cursor-pointer ${
                    activeSection === item.id ? 'text-red-500 font-semibold' : 'text-neutral-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 animate-[expandWidth_0.3s_ease-out]" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Quote Request Button - Desktop Only */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Get Free Quote</span>
            <DynamicIcon name="Calculator" className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <DynamicIcon name={isMobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Slide from Right, 75% Width) */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay (remaining space) */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-300"
        />
        
        {/* Drawer panel */}
        <div 
          className={`fixed top-0 bottom-0 right-0 w-[75%] max-w-[340px] bg-white h-screen shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header with Logo & Close Button */}
          <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center bg-red-600 rounded-lg overflow-hidden">
                <img
                  src="https://khalilahmad12.github.io/agency-images/creative_stack_logo_1782645912215.jpeg"
                  alt="Creative Stack Agency Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold tracking-wider text-base uppercase text-red-500 leading-none">
                Creative Stack
              </span>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 cursor-pointer"
              aria-label="Close menu"
            >
              <DynamicIcon name="X" className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-grow overflow-y-auto py-6 px-5">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-neutral-100/80 pb-3">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-lg font-bold flex items-center justify-between w-full text-left py-1 cursor-pointer ${
                      activeSection === item.id ? 'text-red-500' : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <DynamicIcon name="ExternalLink" className="w-4 h-4 opacity-40" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Footer with CTA */}
          <div className="p-5 border-t border-neutral-100 bg-neutral-50 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-bold text-white bg-red-600 rounded-xl shadow-md cursor-pointer hover:bg-red-700 active:bg-red-800 transition-colors"
            >
              <DynamicIcon name="Calculator" className="w-4 h-4" />
              <span>Request Free Quote</span>
            </button>
            <div className="flex justify-center gap-5 mt-2">
              <a href="#" className="text-neutral-500 hover:text-red-500 transition-colors" aria-label="Facebook">
                <DynamicIcon name="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-red-500 transition-colors" aria-label="Twitter">
                <DynamicIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-red-500 transition-colors" aria-label="LinkedIn">
                <DynamicIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-red-500 transition-colors" aria-label="Instagram">
                <DynamicIcon name="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
