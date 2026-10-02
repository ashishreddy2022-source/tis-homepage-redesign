import CustomCursor from './components/animation/CustomCursor';
import ScrollProgress from './components/animation/ScrollProgress';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import AcademicsSection from './components/sections/AcademicsSection';
import AdmissionsSection from './components/sections/AdmissionsSection';
import CampusSection from './components/sections/CampusSection';
import CTASection from './components/sections/CTASection';
import HeroSection from './components/sections/HeroSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <CampusSection />
        <TestimonialsSection />
        <AdmissionsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
