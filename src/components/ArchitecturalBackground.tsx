import React from 'react';

export const ArchitecturalBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Base Luxury Architectural Canvas Mesh */}
      <div className="absolute inset-0 bg-[#FFF8F3]" />

      {/* 2. Ambient Architectural Light Bloom - Top/Hero Soffit Glow */}
      <div 
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[750px] rounded-full opacity-70 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 227, 212, 0.85) 0%, rgba(255, 112, 72, 0.16) 45%, rgba(244, 63, 127, 0.04) 75%, transparent 100%)',
        }}
      />

      {/* 3. Ambient Courtyard Skylight Glow - Center Right */}
      <div 
        className="absolute top-[35%] -right-[15%] w-[850px] h-[850px] rounded-full opacity-50 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 227, 212, 0.7) 0%, rgba(255, 112, 72, 0.12) 50%, transparent 80%)',
        }}
      />

      {/* 4. Deep Sandstone Warmth - Mid-Lower Left */}
      <div 
        className="absolute top-[65%] -left-[10%] w-[900px] h-[900px] rounded-full opacity-40 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 210, 185, 0.6) 0%, rgba(169, 92, 112, 0.08) 50%, transparent 80%)',
        }}
      />

      {/* 5. Precision CAD Drafting Blueprint Grid & Vectors */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.065] text-[#28151F]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          {/* 40px Minor Grid */}
          <pattern id="cad-minor" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.6" />
          </pattern>
          {/* 200px Major Grid with Crosshairs */}
          <pattern id="cad-major" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Center crosshair */}
            <path d="M 95 100 L 105 100 M 100 95 L 100 105" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Corner alignment ticks */}
            <path d="M 0 10 L 0 0 10 0 M 190 0 L 200 0 200 10 M 200 190 L 200 200 190 200 M 10 200 L 0 200 0 190" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Fill Background with Layered CAD Patterns */}
        <rect width="100%" height="100%" fill="url(#cad-minor)" />
        <rect width="100%" height="100%" fill="url(#cad-major)" />

        {/* Architectural Elevation Guide Lines (Fine hairline vectors) */}
        <g stroke="currentColor" fill="none" strokeWidth="0.8" opacity="0.8">
          {/* Horizontal Datum Levels */}
          <line x1="0" y1="180" x2="100%" y2="180" strokeDasharray="4 8" />
          <line x1="0" y1="580" x2="100%" y2="580" strokeDasharray="8 8" />
          <line x1="0" y1="980" x2="100%" y2="980" strokeDasharray="4 8" />
          <line x1="0" y1="1380" x2="100%" y2="1380" strokeDasharray="8 8" />
          
          {/* Golden Section Arch curves evoking Jodhpur Haveli arched proportions */}
          <path d="M 120 180 Q 220 60 320 180" stroke="#FF7048" strokeWidth="1.2" opacity="0.6" strokeDasharray="6 6" />
          <path d="M 850 580 Q 970 420 1090 580" stroke="#FF7048" strokeWidth="1.2" opacity="0.5" strokeDasharray="6 6" />

          {/* Technical Dimension Callouts in hairline typography */}
          <g fontSize="9" fontFamily="JetBrains Mono" fill="currentColor">
            <text x="45" y="174" opacity="0.7">LVL +0.00m · FINISHED FLOOR LEVEL</text>
            <text x="45" y="574" opacity="0.7">LVL +3.60m · STRUCTURAL CEILING DATUM</text>
            <text x="45" y="974" opacity="0.7">AXIS X-104 · SARDARPURA SECTOR 1</text>
            <text x="45" y="1374" opacity="0.7">SCALE 1:50 · JODHPUR RAJASTHAN</text>
          </g>
        </g>
      </svg>

      {/* 6. Subtle Noise / Stone Texture Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
