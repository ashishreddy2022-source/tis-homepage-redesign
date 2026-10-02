import {
  BookOpen,
  Dumbbell,
  Library,
  Monitor,
  Music,
  Home,
} from 'lucide-react';
import { campusFeatures } from '../../data/content';
import ScrollReveal from '../animation/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const featureIcons = [Monitor, Dumbbell, BookOpen, Music, Library, Home];

export default function CampusSection() {
  return (
    <section id="campus" className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Campus Life"
          title="A World-Class Campus Experience"
          subtitle="Spread across 25+ acres in the Doon Valley, our campus is designed to inspire learning, creativity, and growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="group flex gap-4 p-5 rounded-xl border border-brand-100/20 hover:bg-[var(--bg-alt)] hover:border-brand-200/40 transition-all duration-300 theme-transition">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-700/10 text-brand-600 shrink-0 group-hover:bg-brand-700/15 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[var(--fg)] mb-1 text-[15px]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
