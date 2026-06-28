export function DistributedTracingVisual() {
  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_#1e1432_0%,_#0a0510_100%)] flex items-center justify-center overflow-hidden relative">
      <style>{`
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes flow-line {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .node-glow {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.3));
        }
      `}</style>

      <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: '#fcd34d', stopOpacity: 0.9 }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 0.9 }} />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
            <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0.9 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines - flowing */}
        <g opacity="0.5">
          <line x1="150" y1="250" x2="350" y2="150" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="150" y1="250" x2="350" y2="350" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.2s" repeatCount="indefinite" />
          </line>
          <line x1="350" y1="150" x2="550" y2="200" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.9s" repeatCount="indefinite" />
          </line>
          <line x1="350" y1="350" x2="550" y2="300" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.1s" repeatCount="indefinite" />
          </line>
          <line x1="550" y1="200" x2="650" y2="250" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" />
          </line>
          <line x1="550" y1="300" x2="650" y2="250" stroke="white" strokeWidth="3" strokeDasharray="8 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Animated particles flowing through connections */}
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion path="M150,250 L350,150" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion path="M150,250 L350,350" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion path="M350,150 L550,200" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion path="M350,350 L550,300" dur="2s" repeatCount="indefinite" begin="0.7s" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="2s" repeatCount="indefinite" begin="0.7s" />
        </circle>
        <circle r="5" fill="white" filter="url(#glow)">
          <animateMotion path="M550,200 L650,250" dur="1.5s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.5s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Nodes - abstract circles with gradients */}
        <g className="node-glow">
          <circle cx="150" cy="250" r="45" fill="url(#gradient1)" opacity="0.9">
            <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="250" r="35" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g className="node-glow">
          <circle cx="350" cy="150" r="38" fill="url(#gradient2)" opacity="0.9">
            <animate attributeName="r" values="38;41;38" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="350" cy="150" r="30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g className="node-glow">
          <circle cx="350" cy="350" r="38" fill="url(#gradient3)" opacity="0.9">
            <animate attributeName="r" values="38;41;38" dur="2.8s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <circle cx="350" cy="350" r="30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g className="node-glow">
          <circle cx="550" cy="200" r="35" fill="url(#gradient1)" opacity="0.9">
            <animate attributeName="r" values="35;38;35" dur="2.3s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="550" cy="200" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g className="node-glow">
          <circle cx="550" cy="300" r="35" fill="url(#gradient2)" opacity="0.9">
            <animate attributeName="r" values="35;38;35" dur="2.6s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="550" cy="300" r="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g className="node-glow">
          <circle cx="650" cy="250" r="40" fill="url(#gradient3)" opacity="0.9">
            <animate attributeName="r" values="40;43;40" dur="3.2s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="650" cy="250" r="32" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </g>

        {/* Ambient background elements */}
        <circle cx="100" cy="100" r="80" fill="white" opacity="0.1">
          <animate attributeName="r" values="80;100;80" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="400" r="90" fill="white" opacity="0.1">
          <animate attributeName="r" values="90;110;90" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="50" r="60" fill="white" opacity="0.08">
          <animate attributeName="r" values="60;75;60" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
