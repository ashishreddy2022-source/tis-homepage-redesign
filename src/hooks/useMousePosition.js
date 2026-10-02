import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Tracks mouse position with spring-smoothed values for fluid cursor animations.
 * Returns raw position (x, y) and smoothed spring values (springX, springY).
 */
export function useMousePosition() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    function handleMouse(e) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [x, y]);

  return { x, y, springX, springY };
}
