import Hero from '@/components/Hero';
import DesignObjectives from '@/components/DesignObjectives';
import FunctionalRequirements from '@/components/FunctionalRequirements';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import AppPreview from '@/components/AppPreview';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <FunctionalRequirements />
        <AppPreview />
        <DesignObjectives />
        <TechnicalSpecs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
