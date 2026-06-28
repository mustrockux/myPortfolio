import { motion } from "motion/react";
import { X } from "lucide-react";

interface ComingSoonProps {
  onClose: () => void;
}

export function ComingSoon({ onClose }: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-background"
    >
      <div className="min-h-screen flex items-center justify-center px-8 md:px-16">
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="fixed top-32 right-8 md:right-16 z-50 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <motion.h1
            className="mb-8"
            style={{
              fontFamily: 'var(--font-bodoni)',
              fontSize: 'clamp(48px, 10vw, 120px)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: '1.1',
              color: '#e67ce4',
            }}
          >
            Coming Soon
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground"
            style={{ 
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '20px',
              lineHeight: '1.8'
            }}
          >
            This case study is currently in progress and will be available soon.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={onClose}
            className="mt-12 px-8 py-4 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            style={{
              fontFamily: 'var(--font-lato)',
              fontWeight: 900,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Back to Portfolio
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}