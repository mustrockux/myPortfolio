import { motion } from "motion/react";

export function DifferentialDiagnosisVisual() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_#0d171c_0%,_#05080a_100%)] flex items-center justify-center overflow-hidden relative">
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="baseline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="current-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e67ce4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#e67ce4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e67ce4" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="diff-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>

          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="glow-purple">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="glow-green">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Grid Background */}
        <g stroke="#1e293b" strokeWidth="1" opacity="0.5">
          <line x1="0" y1="125" x2="800" y2="125" />
          <line x1="0" y1="250" x2="800" y2="250" />
          <line x1="0" y1="375" x2="800" y2="375" />
          
          <line x1="200" y1="0" x2="200" y2="500" />
          <line x1="400" y1="0" x2="400" y2="500" />
          <line x1="600" y1="0" x2="600" y2="500" />
        </g>

        {/* Labels */}
        <text x="40" y="60" fill="#3b82f6" fontSize="12" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em" opacity="0.8">BASELINE STATE</text>
        <text x="40" y="440" fill="#e67ce4" fontSize="12" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em" opacity="0.8">CURRENT STATE</text>
        
        {/* Baseline Waveform (Blue) */}
        <path 
          d="M 0 150 Q 100 150, 200 120 T 400 150 T 600 130 T 800 150" 
          fill="none" 
          stroke="url(#baseline-grad)" 
          strokeWidth="3" 
          filter="url(#glow-blue)"
        >
          <animate attributeName="d" 
            values="M 0 150 Q 100 150, 200 120 T 400 150 T 600 130 T 800 150;
                    M 0 150 Q 100 120, 200 150 T 400 130 T 600 150 T 800 150;
                    M 0 150 Q 100 150, 200 120 T 400 150 T 600 130 T 800 150" 
            dur="6s" repeatCount="indefinite" />
        </path>

        {/* Current Waveform (Purple) */}
        <path 
          d="M 0 350 Q 100 350, 200 320 T 350 350 Q 420 220, 500 350 T 600 330 T 800 350" 
          fill="none" 
          stroke="url(#current-grad)" 
          strokeWidth="3" 
          filter="url(#glow-purple)"
        >
          <animate attributeName="d" 
            values="M 0 350 Q 100 350, 200 320 T 350 350 Q 420 180, 500 350 T 600 330 T 800 350;
                    M 0 350 Q 100 320, 200 350 T 350 350 Q 420 220, 500 350 T 600 350 T 800 350;
                    M 0 350 Q 100 350, 200 320 T 350 350 Q 420 180, 500 350 T 600 330 T 800 350" 
            dur="4s" repeatCount="indefinite" />
        </path>

        {/* Highlight the Difference Anomaly area */}
        <g>
          {/* Anomaly connecting dashed lines */}
          <path d="M 420 150 L 420 250" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" opacity="0.6">
            <animate attributeName="y2" values="150; 250; 150" dur="4s" repeatCount="indefinite" />
          </path>
          
          {/* Root Cause Reticle / Target */}
          <g transform="translate(420, 250)">
            <animateTransform attributeName="transform" type="translate" values="420 200; 420 250; 420 200" dur="4s" repeatCount="indefinite" />
            <circle cx="0" cy="0" r="24" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 6" opacity="0.8">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="12" fill="none" stroke="#22c55e" strokeWidth="1.5" filter="url(#glow-green)" />
            <circle cx="0" cy="0" r="3" fill="#22c55e" filter="url(#glow-green)" />
            <line x1="-18" y1="0" x2="-6" y2="0" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="6" y1="0" x2="18" y2="0" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="0" y1="-18" x2="0" y2="-6" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="0" y1="6" x2="0" y2="18" stroke="#22c55e" strokeWidth="1.5" />
          </g>

          {/* Anomaly Label pointing to Reticle */}
          <g transform="translate(420, 250)">
            <animateTransform attributeName="transform" type="translate" values="420 200; 420 250; 420 200" dur="4s" repeatCount="indefinite" />
            <line x1="20" y1="-20" x2="60" y2="-60" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
            <line x1="60" y1="-60" x2="140" y2="-60" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
            <rect x="60" y="-76" width="80" height="16" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1" />
            <text x="100" y="-65" fill="#22c55e" fontSize="9" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em" textAnchor="middle" filter="url(#glow-green)">ROOT CAUSE</text>
            <text x="100" y="-45" fill="#94a3b8" fontSize="8" fontFamily="var(--font-lato)" textAnchor="middle">LATENCY SPIKE</text>
          </g>
        </g>
        
        {/* Floating Data Particles */}
        <circle r="2" fill="#3b82f6" filter="url(#glow-blue)">
          <animateMotion path="M 0 150 Q 100 150, 200 120 T 400 150 T 600 130 T 800 150" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#3b82f6" filter="url(#glow-blue)">
          <animateMotion path="M 0 150 Q 100 150, 200 120 T 400 150 T 600 130 T 800 150" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle r="2" fill="#e67ce4" filter="url(#glow-purple)">
          <animateMotion path="M 0 350 Q 100 350, 200 320 T 350 350 Q 420 180, 500 350 T 600 330 T 800 350" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Time scale */}
        <g opacity="0.8">
          <text x="200" y="480" fill="#64748b" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle">-15m</text>
          <text x="400" y="480" fill="#64748b" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle">NOW</text>
          <text x="600" y="480" fill="#64748b" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle">+15m</text>
        </g>
      </svg>
    </div>
  );
}
