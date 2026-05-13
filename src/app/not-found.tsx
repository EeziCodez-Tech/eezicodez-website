import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f19]">
      <HeroBackground />

      <div className="section-container relative z-10 text-center">
        <div className="fade-up">
          <span className="cta-pill mb-8 inline-block">
            System Error: 404
          </span>

          <h1 className="text-7xl md:text-9xl font-bold text-white !mb-6 tracking-tighter">
            <span className="text-gradient">Lost</span> in Space
          </h1>

          <div className="hero-ctas justify-center">
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
            <Link href="/capabilities" className="btn btn-secondary glass-btn">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative large blurred background numbers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[40rem] font-black text-white/[0.02] select-none pointer-events-none z-0">
        404
      </div>
    </main>
  );
}
