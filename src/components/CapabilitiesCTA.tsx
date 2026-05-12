'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScopingModal from './ScopingModal';

interface CapabilitiesCTAProps {
  pill?: string;
  title: React.ReactNode;
  desc: string;
}

export default function CapabilitiesCTA({ pill = 'Get In Touch', title, desc }: CapabilitiesCTAProps) {
  const [scopingOpen, setScopingOpen] = useState(false);

  return (
    <section className="premium-cta" id="contact">
      <div className="cta-mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
      </div>

      <div className="section-container">
        <div className="cta-glass-card fade-up">
          <div className="cta-highlight"></div>

          <span className="cta-pill fade-up">
            {pill}
          </span>

          <h2 className="cta-title fade-up fade-up-delay-1">
            {title}
          </h2>

          <p className="cta-desc fade-up fade-up-delay-2">
            {desc}
          </p>

          <div className="hero-ctas-partners fade-up fade-up-delay-3">
            <button onClick={() => setScopingOpen(true)} className="btn btn-primary cta-btn-glow">
              Schedule a Call
            </button>
            <Link href="/case-studies" className="btn btn-secondary glass-btn">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      <ScopingModal isOpen={scopingOpen} onClose={() => setScopingOpen(false)} />
    </section>
  );
}
