import { Icon, IconBox } from './ui/Icon';

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery & Architecture", desc: "Mapping technical requirements to scalable system architectures and infrastructure models.", icon: "M12 2L2 7l10 5 10-5-10-5z" },
    { num: "02", title: "Iterative Development", desc: "High-velocity engineering sprints focused on modularity and continuous technical alignment.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
    { num: "03", title: "Automated QA & CI/CD", desc: "Deep integration of automated testing suites to ensure bulletproof code before any deployment.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { num: "04", title: "Security & Compliance", desc: "Rigorous auditing and implementation of security protocols at every level of the stack.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { num: "05", title: "Cloud Orchestration", desc: "Automated provisioning and zero-downtime deployment across global cloud environments.", icon: "M17.5 19L22 12L17.5 5M6.5 5L2 12L6.5 19" },
    { num: "06", title: "Monitoring & Support", desc: "Continuous telemetry and proactive optimization to maintain peak system performance.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" }
  ];

  return (
    <section className="process soft-dark py-32 relative overflow-hidden" id="process">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(64,92,163,0.05),transparent_70%)]"></div>
      <div className="section-container relative z-10">
        <div className="section-header fade-up text-center mb-24">
          <span className="section-label">04 · Our Process</span>
          <h2 className="section-title">Engineering Lifecycle</h2>
          <p className="section-desc mx-auto opacity-60">
            Our systematic approach to software engineering ensures predictable delivery and high-quality outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="premium-sub-card-dark group fade-up text-center flex flex-col items-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-center justify-center w-full mb-8 relative">
                <IconBox variant="premium" size="md" className="group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mx-auto">
                  <Icon path={step.icon} size="sm" strokeWidth={2.5} />
                </IconBox>
                <span className="absolute right-0 top-0 text-[var(--text-primary)]/10 font-black text-4xl group-hover:text-brand-blue/20 transition-colors">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-brand-blue transition-colors">{step.title}</h3>
              <p className="text-[var(--text-primary)]/40 text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
