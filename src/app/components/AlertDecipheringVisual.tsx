import { motion } from "motion/react";

export function AlertDecipheringVisual() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#141a29_0%,_#070a12_100%)] flex items-center justify-center overflow-hidden relative">
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="alert-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>

          <filter id="glow-red">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Abstract Data Streams Background */}
        <g opacity="0.2">
          <path d="M 0 100 Q 200 150, 400 100 T 800 100" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 150 Q 200 100, 400 150 T 800 150" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 200 Q 200 250, 400 200 T 800 200" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 250 Q 200 200, 400 250 T 800 250" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 300 Q 200 350, 400 300 T 800 300" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 350 Q 200 300, 400 350 T 800 350" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
          <path d="M 0 400 Q 200 450, 400 400 T 800 400" fill="none" stroke="url(#stream-grad)" strokeWidth="1" />
        </g>

        {/* Sweeping Radar Line */}
        <g transform="translate(400, 250)">
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#60a5fa" strokeWidth="2" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
          </line>
          <path d="M 0 0 L 0 -200 A 200 200 0 0 1 100 -173 Z" fill="#60a5fa" opacity="0.15">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
          </path>
          
          {/* Radar Circles */}
          <circle cx="0" cy="0" r="50" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <circle cx="0" cy="0" r="100" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="0" cy="0" r="150" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
          <circle cx="0" cy="0" r="200" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.3" />
        </g>

        {/* Alert Node 1 (Critical) */}
        <g transform="translate(480, 150)">
          <circle cx="0" cy="0" r="24" fill="url(#alert-pulse)">
            <animate attributeName="r" values="12; 32; 12" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1; 0; 1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="6" fill="#ef4444" filter="url(#glow-red)" />
          <text x="14" y="4" fill="#ef4444" fontSize="10" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em">CRITICAL</text>
          
          {/* Deciphering Connection Lines */}
          <path d="M 0 0 L -80 100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Alert Node 2 (Warning) */}
        <g transform="translate(250, 200)">
          <circle cx="0" cy="0" r="16" fill="#f59e0b" opacity="0.2">
            <animate attributeName="r" values="8; 24; 8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4; 0; 0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="5" fill="#f59e0b" />
          
          {/* Deciphering Connection Lines */}
          <path d="M 0 0 L 150 50" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Alert Node 3 (Resolved/Info) */}
        <g transform="translate(350, 350)">
          <circle cx="0" cy="0" r="4" fill="#22c55e" opacity="0.8" />
          {/* Deciphering Connection Lines */}
          <path d="M 0 0 L 50 -100" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Intelligent Deciphering Hub */}
        <g transform="translate(400, 250)">
          {/* Rotating decipher rings */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="10 10" opacity="0.9">
            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="22" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="20 5 5 5" opacity="1">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="14" fill="#fafafa" opacity="0.1" />
          
          {/* Center processing dot */}
          <circle cx="0" cy="0" r="4" fill="#fafafa">
            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Deciphering text popups */}
          <text x="45" y="4" fill="#fafafa" fontSize="10" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em" opacity="0">
            <animate attributeName="opacity" values="0; 1; 1; 0; 0" keyTimes="0; 0.1; 0.4; 0.5; 1" dur="4s" repeatCount="indefinite" />
            ANALYZING...
          </text>
          <text x="45" y="4" fill="#ef4444" fontSize="10" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.1em" opacity="0">
            <animate attributeName="opacity" values="0; 0; 0; 1; 1; 0" keyTimes="0; 0.4; 0.5; 0.6; 0.9; 1" dur="4s" repeatCount="indefinite" />
            CORRELATING
          </text>
        </g>
      </svg>
    </div>
  );
}
