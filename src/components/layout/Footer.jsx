import { useState } from 'react';
import { DynamicIcon } from '../common/DynamicIcon';

export function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleScrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-neutral-50 text-neutral-800 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-neutral-200/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 md:mb-16">
          {/* Column 1: Intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center text-white font-black overflow-hidden shadow-md">
                <img
                  src="https://khalilahmad12.github.io/agency-images/creative_stack_logo_1782645912215.jpeg"
                  alt="Creative Stack Agency Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-lg uppercase leading-none text-red-500">
                  Creative Stack
                </span>
                <span className="text-[9px] tracking-widest text-neutral-500 font-bold uppercase">
                  Agency
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              We are a premium digital engineering firm and creative agency. We design and construct modern, robust, mobile-responsive, and business-focused systems across different industries globally.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200 hover:border-transparent shadow-xs">
                <DynamicIcon name="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200 hover:border-transparent shadow-xs">
                <DynamicIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200 hover:border-transparent shadow-xs">
                <DynamicIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white hover:bg-red-600 text-neutral-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-neutral-200 hover:border-transparent shadow-xs">
                <DynamicIcon name="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-neutral-900 mb-6 relative inline-block">
              Quick Navigation
              <span className="absolute bottom-[-6px] left-0 w-8 h-0.5 bg-red-600" />
            </h4>
            
            <ul className="space-y-3.5">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Services Matrix' },
                { id: 'portfolio', label: 'Web Portfolio' },
                { id: 'capabilities', label: 'Key Capabilities' },
                { id: 'contact', label: 'Contact & Quote' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-sm text-neutral-600 hover:text-red-500 hover:translate-x-1 transition-all duration-250 flex items-center gap-2 cursor-pointer"
                  >
                    <DynamicIcon name="CheckCircle" className="w-3.5 h-3.5 opacity-40 text-red-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-neutral-900 mb-6 relative inline-block">
              Corporate Desk
              <span className="absolute bottom-[-6px] left-0 w-8 h-0.5 bg-red-600" />
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <DynamicIcon name="Mail" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-neutral-400 block">General Desk</span>
                  <a href="mailto:maryamnawazdev7780@gmail.com" className="text-sm text-neutral-700 hover:text-red-500 transition-colors">
                    maryamnawazdev7780@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <DynamicIcon name="Phone" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-neutral-400 block">Direct Line</span>
                  <a href="tel:+923027434569" className="text-sm text-neutral-700 hover:text-red-500 transition-colors">
                    +92 302 7434569
                  </a>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <DynamicIcon name="MapPin" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-neutral-400 block">Location</span>
                  <span className="text-sm text-neutral-700">
                    Lahore, Pakistan
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-neutral-900 mb-6 relative inline-block">
              Join Newsletter
              <span className="absolute bottom-[-6px] left-0 w-8 h-0.5 bg-red-600" />
            </h4>
            
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Subscribe to stay updated with our latest technology frameworks, design launches, and local fintech updates.
            </p>

            {isSubscribed ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center text-xs font-bold text-red-700">
                🎉 Thanks for subscribing!
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubscribed(true);
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@corporate.com"
                  className="w-full px-4 py-3 text-xs bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-xs text-white font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-red-600/10"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright Panel */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Creative Stack Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-700 transition-colors">SLA Policy</a>
            <a href="#" className="hover:text-neutral-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-700 transition-colors">Privacy Matrix</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
