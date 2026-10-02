import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../animation/ScrollReveal';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          label="Testimonials"
          title="What Our Community Says"
          light
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center"
                >
                  <Quote className="w-10 h-10 text-gold-400/40 mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-heading font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-brand-300">{t.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-gold-400 w-6' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
