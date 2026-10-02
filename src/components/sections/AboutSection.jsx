import { Award, Heart, Shield } from 'lucide-react';
import { aboutContent } from '../../data/content';
import ScrollReveal from '../animation/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const highlightIcons = [Award, Heart, Shield];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={aboutContent.sectionLabel}
          title={aboutContent.title}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            {aboutContent.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-[var(--fg-secondary)] leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {aboutContent.highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <ScrollReveal key={item.title} delay={i * 0.12} direction="right">
                  <div className="flex gap-4 p-5 rounded-xl bg-[var(--bg-alt)] border border-brand-100/30 hover:border-brand-300/40 transition-colors theme-transition group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-100/60 text-brand-700 shrink-0 group-hover:bg-brand-200/60 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[var(--fg)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
