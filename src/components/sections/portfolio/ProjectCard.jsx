import { motion } from 'motion/react';
import { DynamicIcon } from '../../common/DynamicIcon';

export function ProjectCard({ project, onSelect }) {
  // Handle image error fallback
  const handleImageError = (e) => {
    const target = e.target;
    target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80';
  };

  return (
    <div
      className="group relative flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300 h-full"
    >
      {/* Image Section */}
      <div 
        className="relative w-full overflow-hidden bg-neutral-100 h-0"
        style={{ paddingBottom: 'calc(56.25% - 10px)' }}
      >
        <img
          src={project.image}
          alt={project.title}
          onError={handleImageError}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Chip */}
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded bg-neutral-900/90 text-white backdrop-blur-xs">
          {project.industry}
        </span>

        {project.featured && (
          <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-red-600 text-white shadow-md">
            ★ Featured
          </span>
        )}
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 mb-1.5 group-hover:text-red-600 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-neutral-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* 3 Keywords related to the project */}
        {project.tags && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold text-neutral-500 bg-neutral-50 border border-neutral-200/50 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions Links */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-start">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Visit Website</span>
            <DynamicIcon name="ExternalLink" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
