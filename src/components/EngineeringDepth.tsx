import Link from 'next/link';
import { Icon, IconBox } from './ui/Icon';

export default function EngineeringDepth() {
  const depthCards = [
    {
      num: "01",
      title: "Systems Architecture & Engineering",
      desc: "Designing the structural foundation of high-performance applications with a focus on decoupling and fault tolerance.",
      link: "/capabilities#architecture",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    },
    {
      num: "02",
      title: "Product & Platform Engineering",
      desc: "Building resilient digital infrastructure for enterprises and booming startups, ensuring zero-latency user experiences.",
      link: "/capabilities#platform",
      icon: "M19.14,12.94a7.49,7.49,0,0,0,.05-.94,7.49,7.49,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.74,2H10.26a.5.5,0,0,0-.49.42L9.39,5.07a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L4.9,11.06a7.49,7.49,0,0,0-.05.94,7.49,7.49,0,0,0,.05.94L2.79,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.28,7.28,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.49.42h3.48a.5.5,0,0,0,.49-.42l.38-2.65a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64Z"
    },
    {
      num: "03",
      title: "Data Infrastructure & Automation",
      desc: "Engineering complex data pipelines that process, protect, and automate data flow across distributed networks.",
      link: "/capabilities#data",
      icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    },
    {
      num: "04",
      title: "Security & Compliance Engineering",
      desc: "Embedded compliance and robust security by design, ensuring your systems are battle-tested against all modern threats.",
      link: "/capabilities#security",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }
  ];

  return (
    <section className="capabilities soft-dark py-32 relative overflow-hidden" id="capabilities">
      <div className="bg-glow"></div>
      <div className="section-container relative z-10">
        <div className="section-header fade-up text-center mb-24">
          <span className="section-label">01 · Engineering Depth</span>
          <h2 className="section-title">Systems-Level Thinking <br className="hidden-mobile" />Across Every Layer</h2>
          <p className="section-desc mx-auto opacity-60">
            We don’t just write code. We engineer production-ready systems designed for
            immense scale, solid security, and long term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginBottom: '100px' }}>
          {depthCards.map((card, i) => (
            <div key={i} className="premium-sub-card-dark group fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <IconBox variant="premium" size="xl" className="!mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                <Icon path={card.icon} size="lg" />
              </IconBox>
              <div className="cap-card-content flex flex-col items-center">
                <span className="text-brand-blue/40 font-bold text-xs tracking-widest block mb-4">{card.num}</span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 group-hover:text-brand-blue transition-colors leading-tight">{card.title}</h3>
                <p className="text-[var(--text-primary)]/50 text-sm font-medium leading-relaxed mb-10">{card.desc}</p>
                <Link href={card.link} className="inline-flex items-center justify-center gap-3 text-brand-blue font-bold text-sm group-hover:gap-5 transition-all mt-auto bg-brand-blue/5 py-3 px-6 rounded-xl hover:bg-brand-blue/20">
                  Detailed Specs
                  <Icon size="xs" strokeWidth={2.5} path="M5 12h14M12 5l7 7-7 7" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32 fade-up">
          <Link href="/capabilities" className="btn btn-secondary glass-btn">Explore Our Full Capabilities</Link>
        </div>
      </div>
    </section>
  );
}
