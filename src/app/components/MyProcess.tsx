import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import workshopImage from 'figma:asset/4e6eb94357a801293b443119ffad6e63bfa909a3.png';

export function MyProcess({ onLearnMore }: { onLearnMore?: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform for single image
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="pt-10 sm:pt-12 md:pt-16 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
          
          {/* Header - Shows first on mobile */}
          <div className="lg:col-span-12 order-1 lg:hidden mb-4">
            <h2 
              className="text-foreground"
              style={{ 
                fontFamily: 'var(--font-lato)', 
                fontSize: '18px',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              MY PROCESS
            </h2>
          </div>

          {/* Left column - Header + Quote + Images */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <h2 
              className="mb-16 text-foreground hidden lg:block"
              style={{ 
                fontFamily: 'var(--font-lato)', 
                fontSize: '18px',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              MY PROCESS
            </h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#e67ce4] mb-12"
              style={{ 
                fontFamily: '"EB Garamond", Georgia, serif',
                fontSize: '48px',
                lineHeight: '1.4',
                fontWeight: 400
              }}
            >
              Design with clarity and purpose
            </motion.h2>

            {/* Mobile Image - Shows under tagline on mobile only */}
            <div className="lg:hidden mb-12 w-full">
              <img 
                src={workshopImage} 
                alt="What is Design?" 
                className="w-full h-auto object-cover rounded-sm"
                style={{ 
                  filter: 'grayscale(0.3)',
                  aspectRatio: '16/9'
                }}
              />
            </div>

            {/* Images with parallax - hidden on mobile */}
            <div className="hidden lg:block relative h-[320px]">
              {/* First parallax image - Workshop */}
              <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="absolute top-0 left-0 w-[90%] h-[320px]"
              >
                <div 
                  className="w-full h-full bg-cover bg-center rounded-sm"
                  style={{
                    backgroundImage: `url(${workshopImage})`,
                    filter: 'grayscale(0.3)',
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-8 order-3 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pt-[88px]"
            >
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-foreground"
                  style={{ 
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: '20px',
                    lineHeight: '1.8'
                  }}
                >
                  As a Staff/Principle Product Designer, I help teams understand people, deeply and honestly, in the most complex technical or niche spaces. I use human-centered design, systems thinking, and AI-augmented insight to analyze problems clearly and build solutions responsibly.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-foreground"
                  style={{ 
                    fontFamily: '"EB Garamond", Georgia, serif',
                    fontSize: '20px',
                    lineHeight: '1.8'
                  }}
                >
                  Every feature I design is measured by its impact, its clarity, and its respect for the people using it. Whether I'm working on observability, developer experience, or AI-assisted workflows, my aim is the same: create tools that make difficult work feel supported, intuitive, and meaningful.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-row gap-4 sm:gap-8 items-start w-full justify-between sm:justify-start"
                >
                  {/* Primary Button - View My Work */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group px-8 py-4 border-2 border-[#e67ce4] text-[#e67ce4] hover:bg-[#e67ce4] hover:text-background rounded-full transition-all duration-300 flex items-center justify-center gap-3"
                    style={{ 
                      fontFamily: 'var(--font-lato)',
                      fontWeight: 900,
                      fontSize: '14px',
                      letterSpacing: '0.1em'
                    }}
                  >
                    MY WORK
                    <ChevronDown 
                      size={16} 
                      className="group-hover:translate-y-1 transition-transform duration-300"
                    />
                  </motion.button>

                  {/* Secondary Link - Learn More */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group py-4 text-foreground hover:text-[#e67ce4] transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ 
                      fontFamily: 'var(--font-lato)',
                      fontWeight: 700,
                      fontSize: '14px',
                      letterSpacing: '0.1em'
                    }}
                    onClick={onLearnMore}
                  >
                    LEARN MORE
                    <ChevronRight 
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}