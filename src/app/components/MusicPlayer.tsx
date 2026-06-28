import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Track {
  title: string;
  subtitle?: string;
  credit: string;
  link: string;
}

const tracks: Track[] = [
  {
    title: "Camp",
    subtitle: "Music From The Motion Picture",
    credit: "Assistant Engineer",
    link: "https://music.apple.com/us/album/camp-original-motion-picture-soundtrack/1445962195"
  },
  {
    title: "Chico Hamilton – Juniflip",
    credit: "Assistant Engineer, Assistant Mix Engineer",
    link: "https://music.apple.com/us/album/juniflip/257419906"
  },
  {
    title: "Ra, From One",
    subtitle: "Do You Call My Name",
    credit: "Assistant Mix Engineer",
    link: "https://music.apple.com/us/album/do-you-call-my-name/1443510204?i=1443510442"
  },
  {
    title: "The Untitled",
    subtitle: "Set Me Free",
    credit: "Producer, Engineer",
    link: "https://on.soundcloud.com/9uUYbtVGMAxRR8YLBE"
  },
  {
    title: "Anti-Alias",
    subtitle: "Untitled",
    credit: "Lead Guitar, Writer",
    link: "https://on.soundcloud.com/aJ8W3HV8jPeUhYGZe5"
  },
  {
    title: "Product",
    subtitle: "Hate You",
    credit: "Lead Guitar",
    link: "https://on.soundcloud.com/psV662y9Ixq7ESp0Mf"
  }
];

export function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="fixed bottom-8 left-8 z-50 w-[360px]"
        >
          <div
            className="bg-background/95 backdrop-blur-xl border border-foreground/10 rounded-lg shadow-2xl overflow-hidden"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-foreground/10">
              <h3
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#1a1a1a'
                }}
              >
                My Music Credits
              </h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVisible(false)}
                className="w-7 h-7 flex items-center justify-center text-foreground/40 hover:text-foreground transition-colors"
                aria-label="Close music credits"
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Track List */}
            <div className="px-5 py-4 space-y-3">
              {tracks.map((track, i) => (
                <motion.a
                  key={i}
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 group py-2 border-b border-foreground/5 last:border-0"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-foreground truncate"
                      style={{
                        fontFamily: 'var(--font-lato)',
                        fontSize: '13px',
                        fontWeight: 600
                      }}
                    >
                      {track.title}
                      {track.subtitle && (
                        <span className="font-normal text-foreground/50"> — {track.subtitle}</span>
                      )}
                    </p>
                    <p
                      className="text-muted-foreground text-xs mt-0.5"
                      style={{ fontFamily: 'var(--font-lato)' }}
                    >
                      {track.credit}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-foreground/20 group-hover:text-[#e67ce4] transition-colors mt-0.5 shrink-0"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
