import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { portfolioData } from '../../../data';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ScrollAnimate, StaggerContainer, StaggerItem } from '../../common/ScrollAnimate';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-12 md:py-24 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Block */}
        <ScrollAnimate direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Our Showcases</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Our Web & Mobile Portfolio
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 mt-5 text-base sm:text-lg">
            These examples represent our multi-disciplinary expertise in building secure,
            fast, and enterprise-grade products across diverse global markets.
          </p>
        </ScrollAnimate>

        {/* Projects Grid Container with Staggered Animation */}
        <StaggerContainer
          staggerChildren={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {portfolioData.map((project) => (
            <StaggerItem key={project.id} direction="up" duration={0.6}>
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Project Expanded Modal Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
