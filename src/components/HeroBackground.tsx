"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* Animated dot grid */}
      <div className="hero-bg-grid" />

      {/* Aurora blobs */}
      <div className="hero-aurora hero-aurora-1" />
      <div className="hero-aurora hero-aurora-2" />

      {/* SVG Constellation & Light Trails */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trail1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(64,92,163,0)" />
            <stop offset="50%" stopColor="rgba(64,92,163,0.5)" />
            <stop offset="100%" stopColor="rgba(64,92,163,0)" />
          </linearGradient>
          <linearGradient id="trail2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(107,135,199,0)" />
            <stop offset="50%" stopColor="rgba(107,135,199,0.3)" />
            <stop offset="100%" stopColor="rgba(107,135,199,0)" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Constellation Nodes (Sparkling Points) */}
        {[
          [150, 650], [450, 500], [850, 400], [1250, 250], [1650, 150],
          [250, 750], [650, 600], [1050, 500], [1450, 350], [1750, 300],
          [50, 450], [350, 300], [750, 200], [1150, 150]
        ].map((pos, i) => (
          <circle
            key={i}
            cx={pos[0]}
            cy={pos[1]}
            r="2.5"
            fill="rgba(64,92,163,0.7)"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur={`${(i % 3) + 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Faint Connecting Constellation Lines */}
        <path
          d="M 150 650 L 450 500 L 850 400 L 1250 250 L 1650 150"
          fill="none"
          stroke="url(#trail1)"
          strokeWidth="1"
          className="flow-path"
        />
        <path
          d="M 250 750 L 650 600 L 1050 500 L 1450 350 L 1750 300"
          fill="none"
          stroke="url(#trail2)"
          strokeWidth="1"
          className="flow-path"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M 50 450 L 350 300 L 750 200 L 1150 150"
          fill="none"
          stroke="url(#trail1)"
          strokeWidth="0.5"
          className="flow-path"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Cross connections for network effect */}
        <path d="M 450 500 L 350 300" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />
        <path d="M 850 400 L 650 600" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />
        <path d="M 850 400 L 750 200" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />
        <path d="M 1250 250 L 1050 500" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />
        <path d="M 1250 250 L 1150 150" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />
        <path d="M 1650 150 L 1450 350" fill="none" stroke="rgba(64,92,163,0.15)" strokeWidth="1" />

        {/* Smooth Light Trails (Orbits) */}
        <path
          d="M -200 850 C 400 650, 1000 250, 2200 50"
          fill="none"
          stroke="url(#trail1)"
          strokeWidth="2"
          className="flow-path flow-path-1"
        />
        <path
          d="M -100 950 C 600 750, 1200 450, 2200 250"
          fill="none"
          stroke="url(#trail2)"
          strokeWidth="1.5"
          className="flow-path flow-path-2"
        />

        {/* Travelling Light Particles on Orbits */}
        <circle r="3" fill="#fff" filter="url(#glow)">
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit1" />
          </animateMotion>
        </circle>
        <circle r="2.5" fill="rgba(107,135,199,1)" filter="url(#glow)">
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto" begin="4s">
            <mpath href="#orbit2" />
          </animateMotion>
        </circle>

        {/* Hidden path refs for animateMotion */}
        <path id="orbit1" d="M -200 850 C 400 650, 1000 250, 2200 50" fill="none" />
        <path id="orbit2" d="M -100 950 C 600 750, 1200 450, 2200 250" fill="none" />
      </svg>

      {/* Right-side brand glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-100px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(64,92,163,0.35), rgba(64,92,163,0.08) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Gradient overlay bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--surface-primary)]" style={{ opacity: 0.6 }} />
    </div>
  );
}
