import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-700 via-brand-500 to-gold-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
