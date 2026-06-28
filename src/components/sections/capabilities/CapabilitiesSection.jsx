import { motion } from 'motion/react';
import { capabilitiesData } from '../../../data';
import { DynamicIcon } from '../../common/DynamicIcon';
import { ScrollAnimate, StaggerContainer, StaggerItem } from '../../common/ScrollAnimate';

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-12 md:py-24 bg-neutral-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollAnimate direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Our Core Capabilities
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 mt-5 text-base sm:text-lg">
            We deliver premium digital engineering. From pixel-perfect fluid layouts to
            secure API structures, our systems are architected to perform.
          </p>
        </ScrollAnimate>

        {/* Capabilities Grid with Staggered Animation */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {capabilitiesData.map((capability) => (
            <StaggerItem key={capability.id} direction="up" duration={0.6}>
              <div
                className="group relative flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-neutral-200/60 shadow-md hover:shadow-xl hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Pulse hover background */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(220,38,38,0.03)_0%,transparent_70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <DynamicIcon name={capability.iconName} className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-red-500 transition-colors">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
