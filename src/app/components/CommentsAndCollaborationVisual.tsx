import { motion } from "motion/react";

export function CommentsAndCollaborationVisual() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_#0d1117_0%,_#05080f_100%)] flex items-center justify-center overflow-hidden relative">
      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="thread-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>

          <filter id="glow-sky">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="glow-violet">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Abstract Data Chart Background */}
        <g stroke="#1e293b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4">
          <path d="M 100 350 Q 250 350 300 250 T 500 200 T 700 100" fill="none" />
          <path d="M 100 400 Q 300 380 400 300 T 600 280 T 700 180" fill="none" opacity="0.5" />
        </g>

        {/* Floating Context Nodes (representing data points being commented on) */}
        <circle cx="300" cy="250" r="4" fill="#38bdf8" opacity="0.5" />
        <circle cx="500" cy="200" r="4" fill="#38bdf8" opacity="0.5" />
        <circle cx="600" cy="280" r="4" fill="#38bdf8" opacity="0.5" />

        {/* Comment Thread 1 */}
        <g transform="translate(180, 160)">
          {/* Thread Line connecting down to data */}
          <path d="M 20 50 L 120 90" stroke="url(#thread-grad)" strokeWidth="2" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
          </path>
          
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            {/* Comment Bubble Background */}
            <rect x="0" y="0" width="160" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" filter="url(#glow-sky)" />
            {/* User Avatar Placeholder */}
            <circle cx="24" cy="24" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            <path d="M 18 28 Q 24 20 30 28" stroke="#38bdf8" fill="none" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="24" cy="20" r="3" fill="#38bdf8" />
            
            {/* Mention Highlight */}
            <rect x="44" y="14" width="48" height="8" rx="4" fill="#8b5cf6" opacity="0.4" filter="url(#glow-violet)" />
            <rect x="44" y="26" width="90" height="4" rx="2" fill="#475569" />
            <rect x="44" y="34" width="60" height="4" rx="2" fill="#475569" />
          </motion.g>
        </g>

        {/* Comment Thread 2 */}
        <g transform="translate(420, 80)">
          {/* Thread Line */}
          <path d="M 20 50 L 80 120" stroke="url(#thread-grad)" strokeWidth="2" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
          </path>

          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          >
            {/* Comment Bubble Background */}
            <rect x="0" y="0" width="140" height="48" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.8" filter="url(#glow-violet)" />
            {/* User Avatar Placeholder */}
            <circle cx="24" cy="24" r="12" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1" />
            <path d="M 18 28 Q 24 20 30 28" stroke="#8b5cf6" fill="none" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="24" cy="20" r="3" fill="#8b5cf6" />
            
            <rect x="44" y="16" width="70" height="4" rx="2" fill="#475569" />
            <rect x="44" y="28" width="40" height="4" rx="2" fill="#475569" />
          </motion.g>
        </g>

        {/* Nested Reply in Thread 2 */}
        <g transform="translate(460, 140)">
          <path d="M -20 -10 L 0 20" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.5" />
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
          >
            <rect x="0" y="0" width="120" height="36" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" opacity="0.9" />
            {/* Avatar */}
            <circle cx="18" cy="18" r="8" fill="#1e293b" />
            <rect x="34" y="12" width="60" height="4" rx="2" fill="#475569" />
            <rect x="34" y="20" width="40" height="4" rx="2" fill="#475569" />
          </motion.g>
        </g>

        {/* Collaboration Cursor */}
        <motion.g
          animate={{ x: [0, -50, 40, 0], y: [0, 40, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(360, 260)"
        >
          {/* Pointer */}
          <path d="M 0 0 L 16 24 L 20 16 L 30 22 L 34 18 L 24 12 L 32 8 Z" fill="#e67ce4" stroke="#ffffff" strokeWidth="1.5" filter="url(#glow-violet)" />
          {/* Cursor Label */}
          <rect x="16" y="28" width="64" height="20" rx="4" fill="#e67ce4" />
          <text x="48" y="42" fill="#ffffff" fontSize="10" fontFamily="var(--font-lato)" fontWeight="bold" textAnchor="middle">Alex. M</text>
        </motion.g>
      </svg>
    </div>
  );
}