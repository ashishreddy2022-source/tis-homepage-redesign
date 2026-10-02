import { useScroll, useSpring } from 'framer-motion';

/**
 * Returns a spring-smoothed scroll progress value (0 to 1)
 * for use in scroll progress indicators.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return scaleX;
}
