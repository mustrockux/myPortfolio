import { motion } from "motion/react";

export function DeveloperOnboardingVisual() {
  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center overflow-hidden relative">
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow-pink">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
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
          <filter id="glow-purple">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e67ce4" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="66%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.8" />
          </linearGradient>

          {/* The onboarding journey path */}
          <path id="journey-path" d="M 120 350 C 200 350, 250 150, 350 150 C 450 150, 500 350, 600 350 C 650 350, 680 250, 720 250" />
        </defs>

        {/* Abstract Background Grid/Dots representing the "complex system" */}
        <g opacity="0.15">
          {Array.from({ length: 15 }).map((_, i) => (
            Array.from({ length: 9 }).map((_, j) => (
              <circle key={`${i}-${j}`} cx={i * 60 + 20} cy={j * 60 + 20} r="1" fill="#fafafa" />
            ))
          ))}
        </g>

        {/* The Golden Path (Base Line) */}
        <path d="M 120 350 C 200 350, 250 150, 350 150 C 450 150, 500 350, 600 350 C 650 350, 680 250, 720 250" 
              fill="none" stroke="#333333" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />

        {/* The Golden Path (Glowing Overlay) */}
        <path d="M 120 350 C 200 350, 250 150, 350 150 C 450 150, 500 350, 600 350 C 650 350, 680 250, 720 250" 
              fill="none" stroke="url(#path-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.8" filter="url(#glow-blue)">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="5s" repeatCount="indefinite" />
        </path>

        {/* Particles flowing along the path representing learning progress */}
        <g>
          <circle r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)">
            <animateMotion href="#journey-path" dur="5s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle r="4" fill="#e67ce4" filter="drop-shadow(0 0 6px #e67ce4)">
            <animateMotion href="#journey-path" dur="5s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          <circle r="3" fill="#3b82f6" filter="drop-shadow(0 0 6px #3b82f6)">
            <animateMotion href="#journey-path" dur="5s" repeatCount="indefinite" begin="3s" />
          </circle>
        </g>

        {/* Nodes / Checkpoints */}
        
        {/* Node 1: Start (Developer) */}
        <g transform="translate(120, 350)">
          {/* Pulsing ring */}
          <circle r="24" fill="none" stroke="#e67ce4" strokeWidth="2" opacity="0.6">
            <animate attributeName="r" values="20; 35; 20" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6; 0; 0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="20" fill="#1a1a1a" stroke="#e67ce4" strokeWidth="2.5" filter="url(#glow-pink)" />
          {/* User Icon */}
          <g fill="none" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-10, -10) scale(0.83)">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </g>
          <text x="0" y="45" fill="#e67ce4" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" letterSpacing="0.1em" fontWeight="bold">DEVELOPER</text>
        </g>

        {/* Node 2: First Milestone (Setup/Connect) */}
        <g transform="translate(350, 150)">
          <circle r="20" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2.5" filter="url(#glow-blue)" />
          {/* Link Icon */}
          <g fill="none" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-10, -10) scale(0.83)">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </g>
          <text x="0" y="-35" fill="#3b82f6" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" letterSpacing="0.1em" fontWeight="bold">INTEGRATE</text>
          
          {/* Floating UI tooltips to show progressive disclosure */}
          <g transform="translate(-80, -20)" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="5s" begin="1s" repeatCount="indefinite" />
            <rect x="0" y="0" width="60" height="20" rx="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
            <line x1="10" y1="10" x2="50" y2="10" stroke="#fafafa" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
          </g>
        </g>

        {/* Node 3: Second Milestone (Onboard) */}
        <g transform="translate(600, 350)">
          <circle r="20" fill="#1a1a1a" stroke="#a855f7" strokeWidth="2.5" filter="url(#glow-purple)" />
          {/* Compass/Onboard Icon */}
          <g fill="none" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-10, -10) scale(0.83)">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </g>
          <text x="0" y="45" fill="#a855f7" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" letterSpacing="0.1em" fontWeight="bold">ONBOARD</text>

          <g transform="translate(30, -15)" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0" keyTimes="0; 0.2; 0.8; 1" dur="5s" begin="2.5s" repeatCount="indefinite" />
            <rect x="0" y="0" width="50" height="20" rx="4" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1" />
            <line x1="10" y1="10" x2="40" y2="10" stroke="#fafafa" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
          </g>
        </g>

        {/* Node 4: Final Goal (Observe/Value) */}
        <g transform="translate(720, 250)">
          {/* Pulsing rings of success */}
          <circle r="30" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="r" values="20; 45" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6; 0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="20" fill="#1a1a1a" stroke="#22c55e" strokeWidth="2.5" filter="url(#glow-green)" />
          {/* Chart/Value Icon */}
          <g fill="none" stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-10, -10) scale(0.83)">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </g>
          <text x="-25" y="-35" fill="#22c55e" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" letterSpacing="0.1em" fontWeight="bold">VALUE</text>
        </g>

        {/* Ambient floating UI components in the background representing complex tools */}
        <g opacity="0.3" strokeWidth="1" stroke="#fafafa" fill="none">
          <rect x="150" y="80" width="80" height="60" rx="4" />
          <line x1="160" y1="95" x2="210" y2="95" />
          <line x1="160" y1="110" x2="220" y2="110" />
          <line x1="160" y1="125" x2="190" y2="125" />
        </g>

        <g opacity="0.2" strokeWidth="1" stroke="#fafafa" fill="none">
          <rect x="520" y="80" width="100" height="80" rx="4" />
          <circle cx="570" cy="120" r="15" />
          <path d="M 570 105 A 15 15 0 0 1 585 120" stroke="#3b82f6" strokeWidth="2" />
        </g>
        
        <g opacity="0.2" strokeWidth="1" stroke="#fafafa" fill="none">
          <rect x="250" y="380" width="120" height="40" rx="4" />
          <circle cx="270" cy="400" r="6" />
          <circle cx="290" cy="400" r="6" />
          <circle cx="310" cy="400" r="6" />
          <line x1="330" y1="400" x2="350" y2="400" />
        </g>
      </svg>
    </div>
  );
}