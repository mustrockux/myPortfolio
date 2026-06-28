import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ChronosphereThumbnailProps {
  src: string;
  alt: string;
  accentColor?: string;
  fullBleed?: boolean;
  zoom?: number;
  brightness?: number;
  objectPosition?: string;
}

export function ChronosphereThumbnail({ 
  src, 
  alt,
  accentColor = "#22c55e",
  fullBleed = false,
  zoom = 1,
  brightness = 1.15,
  objectPosition = "top"
}: ChronosphereThumbnailProps) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      {/* Main image - floating with no background */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <ImageWithFallback
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            filter: `brightness(${brightness}) contrast(1.1) saturate(1.05)`,
            imageRendering: 'crisp-edges',
            objectPosition: objectPosition,
            transform: `scale(${zoom})`,
          }}
        />
      </motion.div>
    </div>
  );
}