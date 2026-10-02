import { Blocks, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';
import { programs } from '../../data/content';
import ScrollReveal from '../animation/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  Blocks,
  BookOpen,
  FlaskConical,
  GraduationCap,
};

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-20 md:py-28 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academics"
          title="Programs Designed for Every Stage"
          subtitle="From early childhood to senior secondary, our CBSE-affiliated curriculum nurtures curiosity and builds strong foundations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon];
            return (
              <ScrollReveal key={program.title} delay={i * 0.1}>
                <article className="group relative p-6 rounded-2xl bg-[var(--bg)] border border-brand-100/30 hover:border-brand-300/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col theme-transition">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/60 text-brand-700 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-heading font-semibold text-[var(--fg)] mb-1">
                    {program.title}
                  </h3>
                  <span className="inline-block text-xs font-medium text-gold-500 mb-3">
                    {program.grades}
                  </span>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-500 to-gold-400 transition-all duration-500 rounded-full" />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
