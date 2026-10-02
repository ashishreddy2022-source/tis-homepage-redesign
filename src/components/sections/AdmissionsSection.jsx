import { admissionSteps } from '../../data/content';
import ScrollReveal from '../animation/ScrollReveal';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-20 md:py-28 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Admissions"
          title="Begin Your Child's Journey"
          subtitle="Admissions are open for the upcoming academic session. Follow our simple four-step process to join the TIS family."
        />

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className="relative p-6 rounded-xl bg-[var(--bg)] border border-brand-100/30 text-center theme-transition h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-700 text-white font-heading font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-[var(--fg)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line on desktop */}
                {i < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 border-t-2 border-dashed border-brand-200" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Button href="#contact" variant="primary" size="lg">
              Start Application
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
