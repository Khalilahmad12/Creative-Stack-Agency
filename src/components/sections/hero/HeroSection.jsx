import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DynamicIcon } from '../../common/DynamicIcon';
import { ScrollAnimate } from '../../common/ScrollAnimate';
import heroDeviceMockup from '../../../assets/images/hero_device_mockup_1782543419237.jpg';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToServices = () => {
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Pristine, clean minimalist ambient light gradient */}
      <div className="absolute inset-0 bg-radial-[circle_at_70%_50%,rgba(215,168,77,0.04)_0%,transparent_60%] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and Action Buttons (Matches Image perfectly) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left select-none">
            <ScrollAnimate direction="right" delay={0.1} className="w-full flex flex-col items-start">
              {/* Tagline / Subtitle */}
              <span className="text-[#C49B45] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-4 block">
                WE BUILD DIGITAL SOLUTIONS
              </span>

              {/* Display Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6 font-sans">
                We Build Digital <br />
                <span className="text-neutral-900 block mt-1">Experiences</span>
              </h1>

              {/* Paragraph Description */}
              <p className="text-neutral-500 text-sm sm:text-base md:text-md max-w-lg mb-8 leading-relaxed font-normal">
                We are a creative digital agency providing web development, design and digital marketing services to help your business grow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row items-center gap-6 sm:gap-8 flex-wrap">
                {/* Gold Explore Button */}
                <button
                  onClick={scrollToServices}
                  className="px-6 sm:px-8 py-3.5 bg-[#D7A84D] hover:bg-[#C4953A] text-neutral-900 font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span>Explore Services</span>
                  <span className="text-lg font-normal">➔</span>
                </button>

                {/* Watch Video Button with circular gold border */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center gap-3.5 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full border border-[#D7A84D] flex items-center justify-center bg-white group-hover:bg-[#FAF9F6] transition-all duration-200">
                    <svg
                      className="w-3.5 h-3.5 text-[#D7A84D] ml-0.5 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-neutral-800 text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:text-[#C4953A] transition-colors">
                    WATCH VIDEO
                  </span>
                </button>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Column: Exact Mockup Group (Laptop, Phone, Plant - Photorealistic) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative w-full pt-6 lg:pt-0">
            <ScrollAnimate direction="left" delay={0.2} className="w-full flex justify-center lg:justify-end">
              <div className="relative max-w-[620px] w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 bg-white group hover:shadow-3xl transition-all duration-300">
                <img
                  src={heroDeviceMockup}
                  alt="Digital Agency Solutions Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollAnimate>
          </div>

        </div>
      </div>

      {/* Embedded Video Presentation Modal Triggered by Watch Video button */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden w-full max-w-4xl aspect-video shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player Display with elegant loading preview */}
              <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-neutral-900 to-black text-center p-8">
                {/* Visual waves / tech background */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(215,168,77,0.1)_0%,transparent_70%] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center max-w-md">
                  <div className="w-20 h-20 rounded-full bg-[#D7A84D]/10 border border-[#D7A84D]/30 flex items-center justify-center mb-6 animate-pulse">
                    <svg className="w-8 h-8 text-[#D7A84D] ml-1 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Agency Presentation Video</h4>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    Learn how we engineer pixel-perfect, secure, and business-focused enterprise products that drive incredible market growth.
                  </p>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="px-6 py-2.5 bg-[#D7A84D] hover:bg-[#C4953A] text-neutral-950 font-bold rounded-lg transition-all text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
