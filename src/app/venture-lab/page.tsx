'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon, IconBox } from '@/components/ui/Icon';

interface ParagraphSegment {
  text: string;
  className: string;
}

interface Paragraph {
  text: string;
  isSpecial?: boolean;
  segments?: ParagraphSegment[];
}

const paragraphs: Paragraph[] = [
  { text: "Nigeria is not lacking talent. It's lacking direction." },
  { text: "Millions are learning. Almost none are guided." },
  {
    text: "HUBDUCATE exists to close this gap",
    isSpecial: true,
    segments: [
      { text: "H", className: "text-red-500" },
      { text: "U", className: "bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent" },
      { text: "B", className: "text-yellow-400" },
      { text: "D", className: "text-green-500" },
      { text: "U", className: "text-green-400" },
      { text: "CATE", className: "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent" },
      { text: " exists to close this gap", className: "" }
    ]
  },
  { text: "We connect education, skills and opportunities with personalized guidance at every stage of life." }
];

export default function VentureLabPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPara = paragraphs[activeIndex];
    const totalChars = currentPara.text.length;

    if (charIndex < totalChars) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setActiveIndex(prev => (prev + 1) % paragraphs.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, activeIndex]);

  const renderParaContent = (para: Paragraph, index: number) => {
    if (index > activeIndex) return null;

    const isActive = activeIndex === index;

    if (!isActive) {
      if (para.isSpecial && para.segments) {
        return (
          <span className="font-semibold">
            {para.segments.map((seg: ParagraphSegment, i: number) => (
              <span key={i} className={seg.className}>{seg.text}</span>
            ))}
          </span>
        );
      }
      return para.text;
    }

    // Active typing logic
    if (para.isSpecial && para.segments) {
      let currentLimit = charIndex;
      return (
        <span className="font-semibold">
          {para.segments.map((seg: ParagraphSegment, i: number) => {
            if (currentLimit <= 0) return null;
            const textToShow = seg.text.slice(0, currentLimit);
            currentLimit -= seg.text.length;
            return (
              <span key={i} className={seg.className}>
                {textToShow}
              </span>
            );
          })}
        </span>
      );
    }

    return para.text.slice(0, charIndex);
  };

  return (
    <main className="bg-[#0b0f19] min-h-screen sub-page">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden !py-8 md:!py-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(64,92,163,0.15),transparent_70%)]"></div>
        <div className="section-container relative z-10 text-center flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 !px-4 !py-2 rounded-full !mb-8 fade-up hidden-mobile">
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">EeziCodez Innovation Lab</span>
            </div>
            <h1 className="hero-title fade-up mb-4 md:mb-8 leading-tight">
              Building the <br /> <span className="text-gradient">Next Generation</span>
            </h1>
            <p className="hero-subtext fade-up max-w-2xl mx-auto text-white/60 text-xl font-medium leading-relaxed">
              Welcome to our Venture Lab. A space dedicated to the proof-of-concepts, self-funded projects, and upcoming platforms engineered in-house by the EeziCodez team.
            </p>
          </div>
        </div>
      </section>

      {/* FLAGSHIP SPOTLIGHT: HUBDUCATE */}
      <section className="pt-4 md:pt-32 pb-16 md:pb-24 relative bg-white overflow-hidden">
        {/* Seamless Arched Divider */}
        <div className="absolute -top-[2px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg
            className="relative block w-[calc(100%+5px)] h-[60px] md:h-[120px] left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 0 H1200 V60 C1050 30 850 140 600 80 C350 20 150 140 0 60 V0 Z"
              fill="var(--arch-fill, #0b0f19)"
              stroke="none"
            />
          </svg>
        </div>
        <div className="section-container relative z-10 pt-2 md:!pt-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Visual Preview */}
            <div className="lg:col-span-7 fade-up">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-blue)]/20 to-purple-600/20 rounded-[48px] blur-2xl opacity-50"></div>
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black dark-context">
                  <Image
                    src="/images/hubducate-ui.png"
                    alt="Hubducate Platform Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Status Overlay */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <div className="bg-brand-blue text-pure-white px-3 py-1 md:px-6 md:py-2 rounded-full text-[7px] xs:text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em] shadow-xl whitespace-nowrap">
                      Coming Soon · Alpha Phase
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Context */}
            <div className="lg:col-span-5 !space-y-6 flex flex-col fade-up">
              <div>
                <span className="text-[var(--brand-blue)] font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">Flagship Initiative</span>
                <h2 className="text-4xl md:text-6xl font-bold text-dark !my-2 tracking-tight">Hubducate</h2>
                <p className="text-xl text-dark font-medium leading-relaxed opacity-90">
                  An Integrated Platform for Lifelong Career and Learning Development.
                </p>
              </div>

              <div className="flex flex-col gap-6 mb-8">
                <div className="info-box-premium !p-6 bg-black border-black shadow-xl">
                  <h4 className="text-[var(--brand-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">The Mission</h4>
                  <p className="text-white/70 text-base leading-relaxed">
                    To empower individuals, from secondary school graduates to mid-career changers, to discover personalized paths, upskill effectively, and access global opportunities.
                  </p>
                </div>
                <div className="info-box-premium !p-6 bg-black border-black shadow-xl">
                  <h4 className="text-[var(--brand-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">The Vision</h4>
                  <p className="text-white/70 text-base leading-relaxed">
                    The definitive platform for seamless career guidance, tailored educational content, and real-world job opportunity matching across every stage of professional life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE INSIGHT: MARKET ANALYSIS */}
      <section className="py-20 md:py-40 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="section-container relative z-10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] xl:grid-cols-[0.35fr_0.65fr] gap-16 items-start">
            <div className="fade-up">
              <span className="section-label">01 · Market Insight</span>
              <h2 className="text-2xl md:text-5xl font-bold text-white !mb-10 tracking-tight leading-tight">
                Why we are building for<br /><span className="text-gradient">the lifelong learner.</span>
              </h2>
              <div className="!space-y-4 !mb-16 min-h-[220px]">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`text-base md:text-xl leading-relaxed transition-colors duration-500 ${activeIndex === i ? 'text-white font-bold' : 'text-white/60 font-medium'
                      }`}
                  >
                    {renderParaContent(para, i)}
                    {activeIndex === i && <span className="inline-block w-1 h-5 ml-1 bg-[var(--brand-blue)] animate-pulse align-middle" />}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 fade-up">
              <div>
                <span className="text-white font-bold text-xs md:text-[1rem] uppercase tracking-[0.2em] !mb-6 block">The Reality in Nigeria Today</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { val: "1.7M+", label: "Students graduate every year", desc: "But the job market can't absorb them.", icon: <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" /> },
                    { val: "53%", label: "Of Nigerian youths are unemployed or underemployed", desc: "That's over 80 million young people.", icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M17 11l2 2 4-4" /> },
                    { val: "60%+", label: "Of Nigeria's population is under 30", desc: "A young population, limited opportunities.", icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" /> },
                    { val: "10.5M+", label: "Children are out of school", desc: "The pipeline is broken before it even starts.", icon: <path d="M3 21h18M10 21V8l8-4v17M4 21V10l8-4" /> },
                    { val: "70%", label: "Of Nigerian graduates lack job-ready skills", desc: "Skill mismatch remains a major barrier.", icon: <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" /> },
                    { val: "2 out of 3", label: "Young Nigerians don't have a clear career path", desc: "Career decisions are made without data or guidance.", icon: <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" /> }
                  ].map((stat: { val: string; label: string; desc: string; icon: React.ReactNode }, i: number) => (
                    <div key={i} className="info-box-premium-dark !p-6 flex flex-col gap-6 group hover:border-[var(--brand-blue)] transition-all">
                      <IconBox variant="accent" size="md" className="group-hover:scale-110 transition-transform">
                        <Icon size="sm" strokeWidth={2}>
                          {stat.icon}
                        </Icon>
                      </IconBox>
                      <div>
                        <div className="text-xl md:text-3xl font-black text-white !mb-3 tracking-tight">{stat.val}</div>
                        <div className="text-sm md:text-md font-semibold text-white !mb-3 leading-tight">{stat.label}</div>
                        <div className="text-xs md:text-sm text-white/40 font-medium leading-relaxed">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-8 gap-y-4 !pt-12 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <Icon size="md" className="text-brand-blue" path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <span className="text-white/60 font-bold text-[10px] md:text-[11px] uppercase tracking-wider">The All-in-One Career Companion</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-widest">
                    {['Discover', 'Learn', 'Get Guided', 'Get Opportunities', 'Grow'].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-6">
                        {i !== 0 && <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20"></div>}
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* THE BLUEPRINT: VALUE PROPOSITION */}
      <section className="py-32 relative">
        <div className="section-container">
          <div className="section-header text-center mb-24 fade-up">
            <span className="section-label">02 · The Solution Blueprint</span>
            <h2 className="section-title text-white">The Hubducate Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { h: "Holistic Personalization", p: "Combining detailed career tests with academic/life surveys to ensure recommendations stay relevant at any life stage." },
              { h: "Integrated Matching", p: "A unified feed that curates courses from trusted providers and aggregates internships, job listings, and mentorships." },
              { h: "Inclusive UX", p: "Drawing on user research to ensure the design meets local and global needs, particularly in emerging markets." },
              { h: "Vibrant Community", p: "Fostering cross-generational connections for peer support and expert mentorship during career transitions." }
            ].map((prop, i) => (
              <div key={i} className="info-box-premium-dark h-full">
                <IconBox variant="accent" size="sm">
                  <span className="font-black text-sm">{i + 1}</span>
                </IconBox>
                <h3 className="text-lg font-bold text-white !mb-4 leading-tight">{prop.h}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{prop.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET PERSONAS */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(64,92,163,0.05),transparent_70%)]"></div>
        <div className="section-container relative z-10">
          <div className="section-header text-center mb-24 fade-up">
            <span className="section-label">03 · Impact Focus</span>
            <h2 className="section-title text-white">Who we are building for.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 !px-6 md:!px-32">
            {[
              { t: "Young Learners", d: "High-school graduates and college students finding their first path." },
              { t: "Career Changers", d: "Professionals developing new skills to meet evolving industry demands." },
              { t: "Older Professionals", d: "Lifelong learners seeking to re-skill or reinvent their career later in life." }
            ].map((p, i) => (
              <div key={i} className="text-center group fade-up">
                <div className="text-3xl font-bold text-white mb-4 group-hover:text-[var(--brand-blue)] transition-colors">{p.t}</div>
                <p className="text-white/40 text-sm font-medium leading-relaxed mx-auto max-w-xs">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON CTA */}
      <section className="py-16 md:py-32 relative">
        <div className="section-container complex-cta relative z-10">
          <div className="cta-glass-card text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white !mb-8 leading-tight">
              Interested in our<br /><span className="text-gradient">in-house pipeline?</span>
            </h2>
            <p className="text-white/40 max-w-xl !mb-12 font-medium leading-relaxed mx-auto">
              Hubducate is currently being self-funded and self-developed by EeziCodez. Join our waiting list to follow the development and be the first to experience the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:info@eezicodeztech.com" className="btn btn-primary btn-glow-large">
                Join the Waiting List
              </Link>
              <Link href="/" className="btn btn-secondary glass-btn">
                Back to Lab
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
