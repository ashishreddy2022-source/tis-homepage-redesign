import { motion } from 'framer-motion';

/**
 * Wraps children to animate them in when they enter the viewport.
 * Uses `once: true` so the animation doesn't replay on re-scroll.
 *
 * @param {'up'|'left'|'right'|'fade'} direction - slide direction
 * @param {number} delay - seconds to delay entrance
 */
const directionOffsets = {
  up: { y: 40, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  fade: { x: 0, y: 0 },
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}) {
  const offset = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
