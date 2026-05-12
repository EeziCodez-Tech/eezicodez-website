import Link from 'next/link';
import CapabilitiesCTA from '@/components/CapabilitiesCTA';
import { Icon, IconBox } from '@/components/ui/Icon';

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#0b0f19] sub-page">
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden !py-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(64,92,163,0.2),transparent_70%)]"></div>
        <div className="section-container relative z-10 text-center flex flex-col items-center">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="hero-title fade-up mb-8 leading-tight mx-auto text-center">Engineering <br /><span className="text-gradient">Infrastructure at Scale</span></h1>
            <p className="hero-subtext fade-up max-w-2xl mx-auto text-white/60 text-center">
              We design, build, and orchestrate production-grade software systems for organizations where reliability and technical excellence are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* 3.1 Systems Architecture */}
      <section id="architecture" className="elevated-light py-32 rounded-t-[40px] md:rounded-t-[80px] -mt-12 relative z-20">
        <div className="section-container">
          <div className="section-header fade-up text-center mb-20">
            <span className="section-label">Deep Dive · 01</span>
            <h2 className="section-title-dark">Systems Architecture<br />& Engineering</h2>
            <p className="section-desc mx-auto">
              We design the structural foundation of high-performance applications, ensuring they can handle current scale and future growth with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-4 fade-up">
              <div className="info-box-premium h-full flex flex-col">
                <h4 className="text-ink font-bold !mb-4 text-xl uppercase tracking-widest opacity-40">When You Need This</h4>
                <ul className="space-y-6 flex-grow flex flex-col justify-center">
                  {[
                    {
                      text: 'Rapidly growing user base',
                      icon: 'M23 6l-9.5 9.5-5-5L1 18'
                    },
                    { text: 'Performance & latency bottlenecks', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
                    { text: 'Complex multi-system integrations', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
                    { text: 'Infrastructure cost optimization', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
                    { text: 'Legacy system modernization', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M9 9l3 3-3 3 M15 12h3' },
                    { text: 'Reliability & uptime concerns', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-ink font-semibold text-lg leading-snug !mb-4">
                      <IconBox variant="subtle" size="sm">
                        <Icon path={item.icon} strokeWidth={2.5} size="sm" />
                      </IconBox>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up fade-up-delay-1">
              {[
                { title: 'Distributed Systems', desc: 'Designing resilient architectures that scale across multiple nodes and regions.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
                { title: 'Microservices', desc: 'Decomposing complex monoliths into manageable, high-performance services.', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
                { title: 'Cloud Infrastructure', desc: 'Automated provisioning on AWS, GCP, and Azure using Infrastructure as Code.', icon: 'M17.5 19L22 12L17.5 5M6.5 5L2 12L6.5 19' },
                { title: 'Database Optimization', desc: 'High-availability data modeling and performance tuning for immense loads.', icon: 'M20 7V17M16 3V21M12 11V13M8 7V17M4 11V13' }
              ].map((service, i) => (
                <div key={i} className="premium-sub-card group text-center flex flex-col items-center">
                  <IconBox variant="accent" className="group-hover:scale-110 transition-transform duration-500 mx-auto mb-6">
                    <Icon path={service.icon} size="md" />
                  </IconBox>
                  <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-ink-60 text-sm font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 Product & Platform */}
      <section id="platform" className="soft-dark py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px]"></div>
        <div className="section-container relative z-10">
          <div className="section-header fade-up text-center mb-20">
            <span className="section-label">Deep Dive · 02</span>
            <h2 className="section-title">Product & Platform<br />Engineering</h2>
            <p className="section-desc mx-auto text-white/60">
              We build production-grade applications designed for long-term evolution, reliability, and world-class usability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 fade-up order-2 lg:order-1">
              {[
                { title: 'SaaS Platforms', desc: 'Scalable multi-tenant architectures built for the modern enterprise.' },
                { title: 'ERP Systems', desc: 'Custom enterprise resource planning tools tailored to your operations.' },
                { title: 'Internal Tools', desc: 'High-performance admin panels and operational automation engines.' },
                { title: 'Mobile Backend', desc: 'Robust API infrastructure for customer-facing mobile ecosystems.' }
              ].map((service, i) => (
                <div key={i} className="premium-sub-card-dark group">
                  <h3 className="text-xl font-bold text-white !mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 fade-up">
              <div className="info-box-premium-dark flex flex-col justify-center">
                <div className="flex flex-col gap-10">
                  <div className="flex items-center gap-6 group">
                    <IconBox variant="premium" size="lg" className="group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Icon path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size="md" />
                    </IconBox>
                    <div>
                      <h4 className="text-white font-bold text-lg">Security-First</h4>
                      <p className="text-white/40 text-sm">Battle-hardened by design.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <IconBox variant="premium" size="lg" className="group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Icon size="md">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </Icon>
                    </IconBox>
                    <div>
                      <h4 className="text-white font-bold text-lg">High Performance</h4>
                      <p className="text-white/40 text-sm">Optimized for sub-second latency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 Data Infrastructure */}
      <section id="data" className="elevated-light py-32">
        <div className="section-container">
          <div className="section-header fade-up text-center mb-20">
            <span className="section-label">Deep Dive · 03</span>
            <h2 className="section-title-dark">Data & Automation</h2>
            <p className="section-desc mx-auto">
              We design data systems that enable real-time processing, complex analytics, and full operational automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up fade-up-delay-1">
            {[
              { title: 'Real-time Pipelines', desc: 'Processing millions of events with sub-second latency for instant insights.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
              { title: 'API Orchestration', desc: 'Seamlessly connecting disparate systems into a unified, automated ecosystem.', icon: 'M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16' },
              { title: 'Audit & Compliance', desc: 'Ensuring your data infrastructure meets the highest global standards.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
            ].map((item, i) => (
              <div key={i} className="premium-sub-card group text-center flex flex-col items-center">
                <IconBox variant="accent" className="group-hover:rotate-12 transition-transform duration-500 mx-auto mb-6">
                  <Icon path={item.icon} size="md" />
                </IconBox>
                <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                <p className="text-ink-60 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CapabilitiesCTA
        pill="Get In Touch"
        title={<>Ready to automate<br className="hidden-mobile" /><span className="text-gradient">your operations?</span></>}
        desc="Automate your business processes with our custom software development services. We sreamline operations for businesses of all sizes and improve efficiency."
      />
    </main>
  );
}
