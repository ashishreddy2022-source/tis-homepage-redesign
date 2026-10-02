import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroContent, stats } from '../../data/content';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-gold-500/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-brand-400/10 blur-3xl"
        animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm text-gold-300 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              {heroContent.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroContent.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-brand-200 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button href={heroContent.primaryCTA.href} variant="secondary" size="lg">
              {heroContent.primaryCTA.label}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href={heroContent.secondaryCTA.href} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Play className="w-4 h-4" />
              {heroContent.secondaryCTA.label}
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center md:text-left ${
                i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''
              } md:pr-6`}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-brand-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
