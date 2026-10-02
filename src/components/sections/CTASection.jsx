import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../animation/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 p-10 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-400/10 blur-2xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Ready to Give Your Child<br className="hidden md:block" /> the Best Start?
              </h2>
              <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">
                Schedule a campus visit or connect with our admissions team to learn more about life at Tulas International School.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="#admissions" variant="secondary" size="lg">
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="#contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
