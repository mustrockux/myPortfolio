import { motion } from "motion/react";

export function TraceControlPlaneVisual() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_#1a1025_0%,_#08050d_100%)] flex items-center justify-center overflow-hidden relative">
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="chrono-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#e67ce4" />
          </linearGradient>

          {/* Paths for circular text */}
          {/* Top: Analyze (Left to Right) */}
          <path id="arc-top" d="M 304,250 A 96,96 0 0,1 496,250" />
          {/* Bottom: Delegate (Left to Right) */}
          <path id="arc-bottom" d="M 304,250 A 96,96 0 0,0 496,250" />
          {/* Right: Optimize (Top to Bottom) */}
          <path id="arc-right" d="M 400,154 A 96,96 0 0,1 400,346" />
          {/* Left: Shape (Bottom to Top) */}
          <path id="arc-left" d="M 400,346 A 96,96 0 0,1 400,154" />
        </defs>

        {/* Abstract flow lines (Inbound) */}
        <g strokeWidth="2.5" opacity="0.75" fill="none">
          {/* Prometheus Paths */}
          <g stroke="#e67ce4" strokeDasharray="8 8">
            <path d="M 100 150 C 140 20, 180 280, 220 150 C 240 80, 250 225, 270 225 L 288 225">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 100 150 C 130 250, 170 40,  210 170 C 230 260, 250 235, 270 235 L 288 235">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="2.5s" repeatCount="indefinite" />
            </path>
            <path d="M 100 150 C 150 80,  190 220, 230 130 C 250 40,  250 245, 270 245 L 288 245">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="1.8s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Otel Paths */}
          <g stroke="#3b82f6" strokeDasharray="8 8">
            <path d="M 100 350 C 140 480, 180 220, 220 350 C 240 420, 250 255, 270 255 L 288 255">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="2.2s" repeatCount="indefinite" />
            </path>
            <path d="M 100 350 C 130 250, 170 460, 210 330 C 230 240, 250 265, 270 265 L 288 265">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="1.9s" repeatCount="indefinite" />
            </path>
            <path d="M 100 350 C 150 420, 190 280, 230 370 C 250 460, 250 275, 270 275 L 288 275">
              <animate attributeName="stroke-dashoffset" from="160" to="0" dur="2.4s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
        
        {/* Animated particles flowing (Inbound) */}
        <g>
          {/* Prometheus Particles */}
          <circle r="4" fill="#e67ce4" filter="drop-shadow(0 0 6px rgba(230,124,228,0.9))">
            <animateMotion path="M 100 150 C 140 20, 180 280, 220 150 C 240 80, 250 225, 270 225 L 288 225" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#e67ce4" filter="drop-shadow(0 0 6px rgba(230,124,228,0.9))">
            <animateMotion path="M 100 150 C 130 250, 170 40,  210 170 C 230 260, 250 235, 270 235 L 288 235" dur="3.5s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle r="4" fill="#e67ce4" filter="drop-shadow(0 0 6px rgba(230,124,228,0.9))">
            <animateMotion path="M 100 150 C 150 80,  190 220, 230 130 C 250 40,  250 245, 270 245 L 288 245" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
          </circle>

          {/* Otel Particles */}
          <circle r="4" fill="#3b82f6" filter="drop-shadow(0 0 6px rgba(59,130,246,0.9))">
            <animateMotion path="M 100 350 C 140 480, 180 220, 220 350 C 240 420, 250 255, 270 255 L 288 255" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#3b82f6" filter="drop-shadow(0 0 6px rgba(59,130,246,0.9))">
            <animateMotion path="M 100 350 C 130 250, 170 460, 210 330 C 230 240, 250 265, 270 265 L 288 265" dur="2.9s" repeatCount="indefinite" begin="1.2s" />
          </circle>
          <circle r="4" fill="#3b82f6" filter="drop-shadow(0 0 6px rgba(59,130,246,0.9))">
            <animateMotion path="M 100 350 C 150 420, 190 280, 230 370 C 250 460, 250 275, 270 275 L 288 275" dur="3.4s" repeatCount="indefinite" begin="0.7s" />
          </circle>
        </g>

        {/* Data Streams (Outbound) */}
        <g stroke="#a855f7" strokeWidth="2.5" opacity="0.8" strokeDasharray="8 8">
          <path d="M 512,250 L 704,250">
            <animate attributeName="stroke-dashoffset" from="0" to="-160" dur="1.8s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Outbound Particles */}
        <g>
          <circle r="4" fill="#a855f7" filter="drop-shadow(0 0 6px rgba(168,85,247,0.9))">
            <animateMotion path="M 512,250 L 704,250" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Icons */}
        {/* Prometheus (Flame) */}
        <g transform="translate(68, 120) scale(2)" fill="none" stroke="#e67ce4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </g>
        <text x="100" y="195" fill="#e67ce4" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" opacity="0.8" letterSpacing="0.1em">PROMETHEUS</text>

        {/* Otel (Telescope) */}
        <g transform="translate(68, 320) scale(2)" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/>
          <path d="m13.56 11.747 4.332-.924"/>
          <path d="m16 21-3.105-6.21"/>
          <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/>
          <path d="m6.158 8.633 1.114 4.456"/>
          <path d="m8 21 3.105-6.21"/>
          <circle cx="12" cy="13" r="2"/>
        </g>
        <text x="100" y="395" fill="#3b82f6" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" opacity="0.8" letterSpacing="0.1em">OTEL</text>
        
        {/* Observability (Metrics Monitor) */}
        <g transform="translate(680, 226) scale(2)" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="4 10 8 10 10 14 14 6 16 10 20 10" />
        </g>
        <text x="704" y="295" fill="#a855f7" fontSize="10" fontFamily="var(--font-lato)" textAnchor="middle" opacity="0.8" letterSpacing="0.1em">OBSERVABILITY</text>

        {/* CENTRAL HUB (Fully native SVG for scalable rendering) */}
        <g>
          {/* Outer bounding circle (Visual only) */}
          <circle cx="400" cy="250" r="112" fill="#1a1a1a" stroke="#fafafa" strokeWidth="1" strokeOpacity="0.1" />
          
          {/* Animated border rotating ring */}
          <circle cx="400" cy="250" r="112" fill="none" stroke="#e67ce4" strokeWidth="1.5" strokeDasharray="351.8" strokeDashoffset="175.9" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 400 250" to="360 400 250" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Curved Text Labels */}
          <text fill="#fafafa" fontSize="10" fontFamily="var(--font-lato)" fontWeight="500" letterSpacing="0.2em" opacity="0.8">
            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="4s" repeatCount="indefinite" begin="0s" />
            <textPath href="#arc-top" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              ANALYZE
            </textPath>
          </text>
          
          <text fill="#fafafa" fontSize="10" fontFamily="var(--font-lato)" fontWeight="500" letterSpacing="0.2em" opacity="0.8">
            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="4s" repeatCount="indefinite" begin="1s" />
            <textPath href="#arc-right" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              OPTIMIZE
            </textPath>
          </text>
          
          <text fill="#fafafa" fontSize="10" fontFamily="var(--font-lato)" fontWeight="500" letterSpacing="0.2em" opacity="0.8">
            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="4s" repeatCount="indefinite" begin="2s" />
            <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              DELEGATE
            </textPath>
          </text>
          
          <text fill="#fafafa" fontSize="10" fontFamily="var(--font-lato)" fontWeight="500" letterSpacing="0.2em" opacity="0.8">
            <animate attributeName="opacity" values="0.4; 1; 0.4" dur="4s" repeatCount="indefinite" begin="3s" />
            <textPath href="#arc-left" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              SHAPE
            </textPath>
          </text>

          {/* Inner Core / Logo Background */}
          <circle cx="400" cy="250" r="48" fill="#1a1a1a" stroke="#fafafa" strokeWidth="1" strokeOpacity="0.1" filter="drop-shadow(0 0 30px rgba(230,124,228,0.15))" />
          
          {/* Chronosphere Logo Transparent Icon */}
          <g transform="translate(400, 240)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="url(#chrono-grad)" strokeWidth="2.5" opacity="0.9" />
            <circle cx="-6" cy="0" r="18" fill="none" stroke="#3b82f6" strokeWidth="2.5" opacity="0.7" />
            <circle cx="6" cy="0" r="18" fill="none" stroke="#e67ce4" strokeWidth="2.5" opacity="0.7" />
            <circle cx="0" cy="0" r="3" fill="#fafafa" />
          </g>

          {/* Core Text */}
          <text x="400" y="280" fill="#fafafa" fontSize="8" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.2em" textAnchor="middle">CONTROL</text>
          <text x="400" y="290" fill="#fafafa" fontSize="8" fontFamily="var(--font-lato)" fontWeight="700" letterSpacing="0.2em" textAnchor="middle">PLANE</text>
        </g>
      </svg>
    </div>
  );
}