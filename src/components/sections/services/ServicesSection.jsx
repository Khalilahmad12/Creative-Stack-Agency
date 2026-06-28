import { motion } from 'motion/react';
import { servicesData } from '../../../data';
import { DynamicIcon } from '../../common/DynamicIcon';
import { ScrollAnimate, StaggerContainer, StaggerItem } from '../../common/ScrollAnimate';

export function Services({ onSelectService }) {
  const handleServiceQuoteClick = (serviceTitle) => {
    onSelectService(serviceTitle);
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-neutral-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <ScrollAnimate direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Our Focus</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Comprehensive Digital Services
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 mt-5 text-base sm:text-lg">
            We deliver state-of-the-art software systems to accelerate business velocity,
            improve operational visibility, and guarantee client conversion.
          </p>
        </ScrollAnimate>

        {/* Services Grid with Staggered Animation */}
        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {servicesData.map((service) => (
            <StaggerItem key={service.id} direction="up" duration={0.6}>
              <div
                className="group relative flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-200/60 shadow-md hover:shadow-xl hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-600/10 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-300" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mb-6 shadow-md shadow-red-500/10 group-hover:rotate-6 transition-transform">
                  <DynamicIcon name={service.iconName} className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Bullet List */}
                <ul className="space-y-3 mb-0">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <DynamicIcon name="CheckCircle" className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="leading-tight font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
