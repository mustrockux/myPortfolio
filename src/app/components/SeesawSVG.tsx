import { motion } from "motion/react";

interface SeesawSVGProps {
  className?: string;
}

export function SeesawSVG({ className = "" }: SeesawSVGProps) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className={className}
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '900px',
        maxWidth: '90vw',
        height: 'auto',
      }}
    >
      {/* Main seesaw bar with 3D gradient effect */}
      <defs>
        <linearGradient id="seesawGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8c8c8" />
          <stop offset="50%" stopColor="#a0a0a0" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Shadow layer */}
      <ellipse
        cx="600"
        cy="105"
        rx="590"
        ry="25"
        fill="rgba(0,0,0,0.08)"
        transform="rotate(-2 600 100)"
      />
      
      {/* Main bar */}
      <ellipse
        cx="600"
        cy="100"
        rx="590"
        ry="25"
        fill="url(#seesawGradient)"
        filter="url(#shadow)"
        transform="rotate(-2 600 100)"
      />
      
      {/* Highlight overlay */}
      <ellipse
        cx="600"
        cy="100"
        rx="590"
        ry="25"
        fill="url(#highlightGradient)"
        transform="rotate(-2 600 100)"
      />
      
      {/* Center fulcrum point */}
      <circle
        cx="600"
        cy="110"
        r="8"
        fill="#888888"
        opacity="0.6"
      />
    </motion.svg>
  );
}
