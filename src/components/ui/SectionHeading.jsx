import ScrollReveal from '../animation/ScrollReveal';

/**
 * Consistent section heading with label, title, and optional subtitle.
 * Used across About, Academics, Campus, Admissions sections for visual consistency.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignment}`}>
      <ScrollReveal>
        {label && (
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
              light ? 'text-gold-300' : 'text-gold-500'
            }`}
          >
            {label}
          </span>
        )}
        <h2
          className={`text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-4 ${
            light ? 'text-white' : 'text-[var(--fg)]'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? 'text-slate-300' : 'text-[var(--fg-secondary)]'
            }`}
          >
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}
