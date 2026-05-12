import Hero from '@/components/Hero';
import EngineeringDepth from '@/components/EngineeringDepth';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import TechDepth from '@/components/TechDepth';
import VentureTeaser from '@/components/VentureTeaser';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <EngineeringDepth />
      <CaseStudies />
      <Process />
      <TechDepth />
      <VentureTeaser />
      <CTA />
    </main>
  );
}
