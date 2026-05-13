import Link from 'next/link';
import Image from 'next/image';

export default function VentureTeaser() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#05070a]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(64,92,163,0.1),transparent_70%)]"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 fade-up">
            <span className="section-label">06 · Venture Lab</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] !mb-8 tracking-tight leading-tight">
              Beyond Client<br />
              <span className="text-gradient">Engineering.</span>
            </h2>
            <p className="text-[var(--text-primary)]/50 text-lg font-medium leading-relaxed !mb-10 max-w-md">
              We invest our own resources into building scalable products that solve real-world problems. From EdTech to lifestyle marketplaces, explore what's cooking in our lab.
            </p>
            <Link href="/venture-lab" className="btn btn-primary btn-glow">
              Explore our Ventures
            </Link>
          </div>

          <div className="lg:col-span-7 fade-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-blue)] to-indigo-600 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden bg-black border border-white/10 shadow-2xl dark-context">
                <Image
                  src="/images/hubducate-mockup-landscape.png"
                  alt="Hubducate Preview"
                  fill
                  className="object-cover smooth-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <span className="bg-[var(--brand-blue)] text-pure-white font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] inline-block !px-1 !py-[.9] rounded !mb-2 shadow-lg">Spotlight Project</span>
                    <h3 className="text-2xl font-bold text-pure-white">Hubducate</h3>
                  </div>
                  <div className="bg-pure-white-10 backdrop-blur-md border border-white/20 !px-4 !py-2 rounded-xl text-[10px] font-black text-pure-white uppercase tracking-widest">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
