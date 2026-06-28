import { motion } from 'motion/react';

export function ScrollAnimate({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  viewportMargin = '-100px'
}) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40 };
      case 'down':
        return { y: -40 };
      case 'left':
        return { x: 40 };
      case 'right':
        return { x: -40 };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getDirectionOffset()
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 1.02, 0.43, 1.01] // Clean cubic-bezier for snappy, professional animations
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child elements
export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
  viewportMargin = '-100px'
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = 'up',
  duration = 0.5,
  className = ''
}) {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 30 };
      case 'down':
        return { y: -30 };
      case 'left':
        return { x: 30 };
      case 'right':
        return { x: -30 };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...getDirectionOffset()
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: duration,
            ease: [0.21, 1.02, 0.43, 1.01]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
