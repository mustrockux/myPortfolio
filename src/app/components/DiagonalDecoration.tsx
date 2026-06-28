interface DiagonalDecorationProps {
  className?: string;
}

export function DiagonalDecoration({ 
  className = ""
}: DiagonalDecorationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Diagonal line with gradient shadow effect */}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#cccccc" stopOpacity="0" />
          <stop offset="50%" stopColor="#999999" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#cccccc" stopOpacity="0" />
        </linearGradient>
        
        <filter id="softBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>
      
      {/* Main diagonal line with gradient and blur */}
      <line 
        x1="50" 
        y1="400" 
        x2="950" 
        y2="100" 
        stroke="url(#lineGradient)" 
        strokeWidth="80"
        filter="url(#softBlur)"
      />
    </svg>
  );
}