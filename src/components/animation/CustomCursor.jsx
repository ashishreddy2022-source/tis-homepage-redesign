import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

/**
 * Custom cursor ring that follows the mouse and reacts to interactive elements.
 * Hidden on touch devices via pointer: coarse media query.
 */
export default function CustomCursor() {
  const { springX, springY } = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    function handleEnter() {
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    // Track hovering over interactive elements
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    function addHoverListeners() {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onInteractiveEnter);
        el.addEventListener('mouseleave', onInteractiveLeave);
      });
    }

    function onInteractiveEnter() {
      setHovered(true);
    }
    function onInteractiveLeave() {
      setHovered(false);
    }

    addHoverListeners();

    // Re-attach on DOM changes (e.g. mobile menu opening)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      observer.disconnect();
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', onInteractiveEnter);
        el.removeEventListener('mouseleave', onInteractiveLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-brand-500/60"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          opacity: visible ? 1 : 0,
          borderColor: hovered ? 'var(--color-gold-400)' : 'var(--color-brand-500)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        aria-hidden="true"
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-brand-600"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 6 : 4,
          height: hovered ? 6 : 4,
          opacity: visible ? 0.8 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        aria-hidden="true"
      />
    </>
  );
}
