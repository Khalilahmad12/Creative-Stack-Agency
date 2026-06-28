import { motion } from 'motion/react';
import { DynamicIcon } from '../../common/DynamicIcon';

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleImageError = (e) => {
    const target = e.target;
    target.src = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backing screen lock blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-xs"
      />

      {/* Modal Card Body */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white border border-neutral-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10"
      >
        {/* Modal Cover Image */}
        <div className="relative h-64 bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-950/60 hover:bg-neutral-950 text-white flex items-center justify-center border border-neutral-800 cursor-pointer transition-colors"
          >
            <DynamicIcon name="X" className="w-5 h-5" />
          </button>

          <h3 className="absolute bottom-6 left-6 text-2xl font-extrabold text-white">
            {project.title}
          </h3>
        </div>

        {/* Body Details */}
        <div className="p-8">
          <div className="flex items-center gap-2.5 mb-5 text-xs font-semibold text-red-500 uppercase tracking-widest">
            <span className="px-2.5 py-1 rounded bg-red-50 border border-red-200">
              {project.industry}
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-500">
              Platform: {project.category === 'mobile' ? 'Mobile Native' : 'Responsive Web'}
            </span>
          </div>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
            {project.description} We engineered this corporate deployment from the ground up prioritizing sub-second bundle sizing, high Lighthouse compliance, and bulletproof user sign-on workflows.
          </p>

          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-3">
              Technologies & Work scopes
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-neutral-700 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions footer */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-6 border-t border-neutral-100">
            <div className="text-xs text-neutral-500 font-medium">
              Production grade verified
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-neutral-600 hover:text-neutral-950 border border-neutral-200 rounded-full cursor-pointer transition-colors"
              >
                Close Details
              </button>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-500/10 hover:shadow-lg transition-all"
              >
                <span>Launch Live Website</span>
                <DynamicIcon name="ExternalLink" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
