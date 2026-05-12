import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Digital Infrastructure for National-Scale Farmer Onboarding",
      system: "Offline-first data platform",
      meta: "AgriTech · Infrastructure",
      image: "/images/heifer-ui.png",
      problem: "Fragmented data collection and poor connectivity in rural areas caused delayed payment cycles and lack of centralized visibility.",
      solution: "Engineered an offline-first mobile system integrated with a centralized ERP and automated payment pipelines for real-time operational visibility.",
      impact: [
        { val: "5,000+", lbl: "users onboarded" },
        { val: "85%", lbl: "reduction in payment delays" },
        { val: "Real-time", lbl: "operational visibility" },
        { val: "100%", lbl: "compliant data handling" }
      ]
    },
    {
      title: "Admissions Management Platform for Multi-School Operations",
      system: "Multi-tenant platform + Digital Payments",
      meta: "EdTech · Enterprise",
      image: "/images/admissions-mockup.png",
      problem: "Schools managing high volumes relied on manual processes, paper forms, and uncoordinated payment tracking with no real-time status visibility.",
      solution: "Built a multi-tenant platform enabling schools to automate application workflows, reconcile payments, and coordinate communication through a centralized system.",
      impact: [
        { val: "Multi-school", lbl: "institutions supported" },
        { val: "100%", lbl: "digital payment collection" },
        { val: "Real-time", lbl: "application tracking" },
        { val: "Automated", lbl: "notification pipelines" }
      ]
    },
    {
      title: "Dual-App Booking Ecosystem for Beauty & Wellness",
      system: "Two-sided Marketplace + Real-time Sync",
      meta: "SaaS · Wellness Marketplace",
      image: "/images/shako-mockup.png",
      problem: "Beauty businesses operated via manual phone-based scheduling, leading to frequent double-bookings and significant revenue loss.",
      solution: "Built a dual-app ecosystem (Business + Client) on a shared API backend with a centralized availability engine and robust conflict resolution logic.",
      impact: [
        { val: "Dual-App", lbl: "ecosystem deployed" },
        { val: "Real-time", lbl: "calendar synchronization" },
        { val: "0 Conflicts", lbl: "via centralized availability logic" },
        { val: "Instant", lbl: "discovery and booking" }
      ]
    }
  ];

  return (
    <main className="bg-[#05070a] sub-page">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden !py-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(64,92,163,0.15),transparent_70%)]"></div>
        <div className="section-container relative z-10 text-center flex flex-col items-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="hero-title fade-up mb-8 leading-tight">Enabling <br /><span className="text-gradient">Real-World Impact</span></h1>
            <p className="hero-subtext fade-up max-w-2xl mx-auto text-white/60 text-xl font-medium leading-relaxed">
              A selection of our most complex engineering challenges and the scalable systems we built to solve them.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES LIST */}
      <section className="bg-white py-40 rounded-t-[40px] md:rounded-t-[80px] -mt-12 relative z-20">
        <div className="section-container">
          <div className="flex flex-col gap-24">
            {cases.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start fade-up">
                {/* Image Side */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-xl border border-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover smooth-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-col h-full" style={{ gap: '1rem' }}>
                    <span className="text-[var(--brand-blue)] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">{project.meta}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--ink)] mb-8 tracking-tight leading-[1.1]">{project.title}</h2>

                    <div className="flex flex-wrap gap-3 mb-10">
                      <div className="bg-[var(--brand-blue-lite)] text-[var(--brand-blue)] !px-5 !py-2 rounded-lg text-xs font-bold uppercase tracking-wider">{project.system}</div>
                    </div>

                    <div className="space-y-10 mb-16 max-w-xl">
                      <p className="text-[var(--ink-60)] font-medium leading-relaxed text-lg !pb-4">
                        {project.problem}
                      </p>
                      <p className="text-[var(--ink-60)] font-medium leading-relaxed opacity-80 border-l-2 border-[var(--brand-blue)] !pl-6">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="premium-cta" id="contact">
        <div className="cta-mesh-bg">
          <div className="mesh-blob blob-1"></div>
          <div className="mesh-blob blob-2"></div>
        </div>

        <div className="section-container">
          <div className="cta-glass-card fade-up">
            <div className="cta-highlight"></div>

            <span className="cta-pill fade-up">
              Complex made simple
            </span>

            <h2 className="cta-title fade-up fade-up-delay-1">
              Have a complex<br className="hidden-mobile" />
              <span className="text-gradient">system to build?</span>
            </h2>

            <p className="cta-desc fade-up fade-up-delay-2">
              Our engineering team is ready to help you architect and build for the next level of scale.
            </p>

            <div className="hero-ctas-partners fade-up fade-up-delay-3">
              <a href="mailto:info@eezicodeztech.com" className="btn btn-primary cta-btn-glow">
                Schedule a Call
              </a>
              <Link href="/capabilities" className="btn btn-secondary glass-btn">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
