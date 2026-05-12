import Link from 'next/link';
import { Icon } from './ui/Icon';

export default function CaseStudies() {
  const caseCards = [
    {
      meta: "AgriTech · Distributed Systems",
      title: "Digital Infrastructure for National-Scale Onboarding",
      desc: "Designed and deployed an offline-first system enabling large-scale onboarding, automated payments, and real-time operational visibility.",
      metricVal: "5,000+",
      metricLbl: "Users Onboarded"
    },
    {
      meta: "EdTech · Enterprise",
      title: "Admissions Management for Multi-School Operations",
      desc: "Architected a multi-tenant platform enabling schools to automate application workflows, reconcile payments, and coordinate communication.",
      metricVal: "100%",
      metricLbl: "Digital Payment Collection"
    },
    {
      meta: "SaaS · Wellness Marketplace",
      title: "Dual-App Booking Ecosystem for Beauty Businesses",
      desc: "Built a two-sided marketplace on a shared API backend with a centralized availability engine ensuring zero booking conflicts.",
      metricVal: "Real-time",
      metricLbl: "Sync & Orchestration"
    }
  ];

  return (
    <section className="cases elevated-light py-32" id="cases">
      <div className="section-container">
        <div className="section-header fade-up text-center">
          <span className="section-label">03 · Our Solutions</span>
          <h2 className="section-title-dark">Real-World Systems,<br />Proven Impact</h2>
          <p className="section-desc">
            We build systems that solve core operational challenges, designed to handle immense scale and complexity without failing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseCards.map((card, i) => (
            <div key={i} className="premium-sub-card group fade-up text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="case-card-content h-full flex flex-col items-center">
                <div className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-6 opacity-60">{card.meta}</div>
                <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-brand-blue transition-colors leading-tight">{card.title}</h3>
                <p className="text-ink-60 text-sm font-medium leading-relaxed mb-10 flex-grow">
                  {card.desc}
                </p>

                <div className="w-full bg-brand-blue/5 p-8 rounded-3xl mb-10 group-hover:bg-brand-blue/10 transition-all border border-brand-blue/5"
                  style={{
                    padding: "1rem 2rem"
                  }}>
                  <span className="text-4xl font-black text-brand-blue block mb-2">{card.metricVal}</span>
                  <span className="text-[10px] font-bold text-ink uppercase tracking-[0.2em] opacity-40">{card.metricLbl}</span>
                </div>

                <Link href="/case-studies" className="inline-flex items-center justify-center gap-3 text-brand-blue font-bold text-sm group-hover:gap-5 transition-all">
                  View Detailed Results
                  <Icon size="xs" strokeWidth={2.5} path="M5 12h14M12 5l7 7-7 7" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
