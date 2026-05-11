import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, ExternalLink, X } from 'lucide-react';
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
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [isVisible, setIsVisible] = useState(true);

  const track = tracks[currentTrack];

  // Generate waveform bars once (like SoundCloud)
  const [waveformBars] = useState(() => 
    Array.from({ length: 100 }, () => Math.random() * 60 + 20)
  );

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setProgress(percentage);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setProgress(33);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
    setProgress(33);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="fixed bottom-8 left-8 z-50 w-[400px]"
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
                aria-label="Close music player"
              >
                <X size={16} />
              </motion.button>
            </div>

            <div className="px-5 py-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTrack}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Track Info */}
                  <div className="min-w-0">
                    <h4 
                      className="text-foreground truncate mb-1"
                      style={{
                        fontFamily: 'var(--font-lato)',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '0.02em'
                      }}
                    >
                      {track.title}
                    </h4>
                    {track.subtitle && (
                      <p 
                        className="text-foreground/60 text-xs truncate mb-1"
                        style={{
                          fontFamily: 'var(--font-lato)'
                        }}
                      >
                        {track.subtitle}
                      </p>
                    )}
                    <p 
                      className="text-muted-foreground text-xs truncate"
                      style={{
                        fontFamily: 'var(--font-lato)'
                      }}
                    >
                      {track.credit}
                    </p>
                  </div>

                  {/* Waveform */}
                  <div 
                    className="relative h-12 cursor-pointer group"
                    onClick={handleProgressClick}
                  >
                    <div className="absolute inset-0 flex items-center gap-[2px]">
                      {waveformBars.map((height, i) => {
                        const isActive = (i / waveformBars.length) * 100 <= progress;
                        return (
                          <div
                            key={i}
                            className="flex-1 rounded-sm transition-all duration-150"
                            style={{
                              height: `${height}%`,
                              backgroundColor: isActive 
                                ? '#e67ce4' 
                                : 'rgba(26, 26, 26, 0.15)',
                              opacity: isActive ? 1 : 0.4
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    {/* Hover indicator */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrevious}
                        className="w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                        aria-label="Previous track"
                      >
                        <SkipBack size={18} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 flex items-center justify-center bg-[#e67ce4] hover:bg-[#d06ad3] text-white rounded-full transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-0.5" />}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                        aria-label="Next track"
                      >
                        <SkipForward size={18} />
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.a
                        href={track.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1.5 border border-foreground/20 hover:border-[#e67ce4] hover:text-[#e67ce4] rounded-full transition-all duration-200 flex items-center gap-2"
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.03em',
                          textTransform: 'uppercase'
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>Open in Music Player</span>
                      </motion.a>

                      <span 
                        className="text-xs text-muted-foreground tabular-nums"
                        style={{ fontFamily: 'var(--font-lato)' }}
                      >
                        {currentTrack + 1} / {tracks.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}