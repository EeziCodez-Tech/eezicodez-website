export default function TechDepth() {
  const techCategories = [
    {
      title: "Backend & Systems",
      tech: ["Node.js", "Python", "Golang", ".NET", "PHP (Laravel)", "AdonisJS", "Rust"]
    },
    {
      title: "Frontend & Mobile",
      tech: ["Next.js | Vue.js", "React Native | Flutter", "Svelte ", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Data & Infrastructure",
      tech: ["PostgreSQL", "PowerBI", "Redis", "MongoDB", "GraphQL", "Digital Ocean", "Elasticsearch", "AWS", "Google Cloud", "Firebase"]
    },
    {
      title: "DevOps & Compliance",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "NDPR/GDPR", "ISO 27001"]
    }
  ];

  return (
    <section className="tech-depth elevated-light py-32" id="tech">
      <div className="section-container relative z-10">
        <div className="section-header fade-up text-center mb-24">
          <span className="section-label">05 · Technology Stack</span>
          <h2 className="section-title-dark">Battle-Tested Infrastructure</h2>
          <p className="section-desc mx-auto opacity-70">
            We select technologies based on their stability, scalability, and performance in stressed production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="premium-sub-card group fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <h3 className="text-lg font-bold text-ink mb-8 border-b border-black/5 pb-4 group-hover:text-brand-blue group-hover:border-brand-blue/20 transition-all">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tech.map((t, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-lg bg-black/5 text-ink-60 text-xs font-bold hover:bg-brand-blue hover:text-[var(--text-primary)] transition-colors cursor-default">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
