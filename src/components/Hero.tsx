'use client';

import HeroBackground from './HeroBackground';
import { Icon } from './ui/Icon';


export default function Hero() {
  return (
    <section className="revamp-hero" id="home">
      <HeroBackground />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We Build Scalable Systems
          </h1>
          <p className="hero-subtext hero-subtext-1">
            We design and deliver production-grade software systems<br />across web, mobile, and data infrastructure.
          </p>
          <p className="hero-subtext hero-subtext-2">
            Built for organisations that cannot afford downtime<br />or technical debt.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Start a Project
              <Icon size="xs" path="M5 12h14M12 5l7 7-7 7" />
            </a>
            <a href="#work" className="btn btn-secondary hero-btn-secondary">Explore Our Process</a>
          </div>

          <div className="hero-proof">
            <div className="proof-item">
              <Icon size="sm" strokeWidth={2}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </Icon>
              <span><strong>Government-grade systems</strong><br />NDPR & GDPR compliant</span>
            </div>
            <div className="proof-item">
              <Icon size="sm">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </Icon>
              <span><strong>4+ sectors served</strong><br />GovTech · EdTech<br />AgriTech · Enterprise</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Card 1: Reliability */}
          <div className="floating-panel panel-uptime">
            <div className="uptime-header">Engineering Reliability</div>
            <div className="uptime-metric">99.9%</div>
            <div className="uptime-sub">CORE SYSTEM UPTIME</div>
            <div className="uptime-chart">
              <svg width="100%" height="100%" viewBox="0 0 200 60">
                <path d="M0 45C25 42 45 48 70 32C95 16 115 22 135 12C155 2 175 6 200 1"
                  fill="none" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <ul className="uptime-list">
              <li>
                <Icon size="xs" strokeWidth={3} path="M20 6L9 17l-5-5" />
                <span>Fault-Tolerant Clusters</span>
                <span className="status">Live</span>
              </li>
              <li>
                <Icon size="xs" strokeWidth={3} path="M20 6L9 17l-5-5" />
                <span>Automated Patching</span>
                <span className="status">Active</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Delivery */}
          <div className="floating-panel panel-transaction">
            <div className="trans-header">
              <span>Strategic Delivery</span>
              <span className="trans-link">Sprints</span>
            </div>
            <div className="trans-body">
              <div className="trans-chart">
                <div className="donut">
                  <div className="donut-inner">
                    <span className="trend">BI-WEEKLY</span>
                    <span className="val">2w</span>
                    <span className="lbl">Cycles</span>
                  </div>
                </div>
              </div>
              <div className="trans-info">
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Iterative Momentum</div>
                <p className="hero-subtext-2" style={{ fontSize: '12px', lineHeight: '1.5', marginTop: 0 }}>
                  75% faster deployment cycles using our proprietary engineering framework.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Mockup — single composite image */}
          <div className="hero-mockup">
            <img
              src="/images/mockup-real.png"
              alt="EeziCodez product showcase — mobile and desktop interfaces"
              draggable={false}
            />
            <div className="hero-mockup-shadow"></div>
          </div>
        </div>
      </div>

      <div className="hero-footer-trust">
        TRUSTED BY ORGANISATIONS MAKING AN IMPACT
      </div>
    </section>
  );
}
