import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';
import { useRef } from 'react';
import conferenceImage from 'figma:asset/d231690d168aace877e3590ec36899953d768ba4.png';
import performanceImage from 'figma:asset/a16a1253af0f83d150b2748d0a7f628056de5531.png';
import audioEngineeringImage from 'figma:asset/0179ede01c91262d3f5550b376a8f81b794d6ec9.png';
import designWorkshopImage from 'figma:asset/ef0510e639a02617380b3548f142a950929c046c.png';
import kidsAtPivotalImage from 'figma:asset/e64221f38f3d884005335a99c1bcedc3ecd4607b.png';
import blackAtPivotalImage from 'figma:asset/1a3283812975bd23af5f207fbbf7403ffc4ccf6b.png';
import lunaImage from 'figma:asset/02cd229a66b5954de261d79b9af7f820e8815149.png';
import photographyImage from 'figma:asset/b71724627bb5524a0a7b7c276879db6974227be3.png';
import { MusicPlayer } from './MusicPlayer';

interface WhatShapesMeProps {
  onClose: () => void;
}

export function WhatShapesMe({ onClose }: WhatShapesMeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for parallax images
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRef4 = useRef<HTMLDivElement>(null);
  const imageRef5 = useRef<HTMLDivElement>(null);
  const imageRef6 = useRef<HTMLDivElement>(null);
  const imageRef7 = useRef<HTMLDivElement>(null);

  // Parallax effects for images
  const { scrollYProgress: scrollProgress1 } = useScroll({
    target: imageRef1,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollProgress1, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: imageRef2,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y2 = useTransform(scrollProgress2, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress3 } = useScroll({
    target: imageRef3,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y3 = useTransform(scrollProgress3, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress4 } = useScroll({
    target: imageRef4,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y4 = useTransform(scrollProgress4, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress5 } = useScroll({
    target: imageRef5,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y5 = useTransform(scrollProgress5, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress6 } = useScroll({
    target: imageRef6,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y6 = useTransform(scrollProgress6, [0, 1], [20, -20]);

  const { scrollYProgress: scrollProgress7 } = useScroll({
    target: imageRef7,
    container: containerRef,
    offset: ["start end", "end start"]
  });
  const y7 = useTransform(scrollProgress7, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-background z-[100] overflow-y-auto"
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="fixed top-8 right-8 md:right-16 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center z-50 hover:border-[#e67ce4] hover:text-[#e67ce4] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close"
      >
        <X size={20} />
      </motion.button>

      {/* Content */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
          
          {/* Header - Shows first on mobile */}
          <div className="lg:col-span-12 order-1 lg:hidden">
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
              MORE ABOUT ME
            </h2>
          </div>

          {/* Left column - H2 Header + Pink H3 */}
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
              MORE ABOUT ME
            </h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#e67ce4] sticky top-32"
              style={{ 
                fontFamily: '"EB Garamond", Georgia, serif',
                fontSize: '48px',
                lineHeight: '1.4',
                fontWeight: 400
              }}
            >
              Redesigning A Life
            </motion.h3>
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
              {/* Section 1: Music, Production, and Creative Craft */}
              <section className="mb-24 md:mb-32">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  Music, Production, and Creative Craft
                </h5>

                {/* Audio Engineering Image */}
                <div ref={imageRef1} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y1 }}
                    className="w-full h-full"
                  >
                    <img
                      src={audioEngineeringImage}
                      alt="Audio engineering"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '16/9',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    I began my professional life as an audio engineer, working with clients across major labels, agencies, TV and cable networks. I recorded and mixed major and independent artists across different styles and genres. I was also a musician performing as a guitarist throughout New York City and producing emerging artists and rock bands.
                  </p>
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    This work taught me how to collaborate in a creative and technical disciplines, how to operate within tight constraints, and what it means to deliver under pressure. These skills would later become foundational to my design practice.
                  </p>
                </div>
              </section>

              {/* Section 2: A Shift towards Systems and Design */}
              <section className="mb-24 md:mb-32">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  A Shift towards Systems and Design
                </h5>

                {/* Design Workshop Image */}
                <div ref={imageRef2} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y2 }}
                    className="w-full h-full"
                  >
                    <img
                      src={designWorkshopImage}
                      alt="Design workshop and collaboration"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '16/9',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    Over time, I became increasingly interested in the systems behind the work: tools, workflows, and decisions that shape outcomes. That curiosity led me to transition into web and product design. What felt like a major pivot quickly revealed itself as a continuation of production and creative work. Deep listening, iteration, and balancing precision with intuition carried naturally from music and engineering into digital design and cross functional collaboration.
                  </p>
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    Since then, I've taught user experience, consulted for Fortune 100 companies, and worked across startups and agencies of varying sizes. Today, I'm a Product Designer at an observability startup, collaborating closely with senior designers, engineers, product managers, and sales teams. The work is complex and highly cross-functional, requiring constant tradeoffs between human needs, technical constraints, and business goals—an environment where systems thinking and balance matter.
                  </p>
                </div>
              </section>

              {/* Section 3: Perspective Through Travel and Experience */}
              <section className="mb-24 md:mb-32">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  Perspective Through Travel and Experience
                </h5>

                {/* Photography Website Image */}
                <div ref={imageRef3} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={photographyImage}
                      alt="Nature photography workshop website"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '16/9',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    Travel has been a consistent influence on how I understand people and context. I've visited 32 countries and continue to seek out new environments, cultures, and perspectives. Immersion, curiosity, and adaptability shape how I approach design recognizing that most problems don't have a single correct answer.
                  </p>
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    Recently, I helped my partner take his passion for travel, photography, and nature and redesign his life to a new career path. We built a new nature photography start up. Together, we hope to continue designing workshops in places like Utah, Tanzania, Alaska, Churchill and Ecuador. These experiences blend craft, nature, and human connection as well as a love for photography, animals, and the outdoors.
                  </p>
                </div>
              </section>

              {/* Section 4: Design as a Way of Thinking */}
              <section className="mb-24 md:mb-32">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  Design as a Way of Thinking
                </h5>

                {/* Kids at Pivotal Image */}
                <div ref={imageRef4} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={kidsAtPivotalImage}
                      alt="Bringing my kids to work at Pivotal"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '3/2',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    I'm also a mother of two creative and strong-willed teenage boys. For them, I try to model design not just as a profession, but as a way of thinking to solve problems, navigate complexity, and build a future world with intention.
                  </p>
                </div>
              </section>

              {/* Section 5: Community, Responsibility, and Place */}
              <section className="mb-24 md:mb-32">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  Community, Responsibility, and Place
                </h5>

                {/* Black at Pivotal Image */}
                <div ref={imageRef5} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={blackAtPivotalImage}
                      alt="Black at Pivotal community"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '16/9',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    I'm deeply engaged in community organizing and social justice. Being born and raised in New York City, and now raising my own family here, has just reinforced the belief that systems, digital or otherwise, are never neutral. Design plays a role in shaping access, equity, and opportunity, and this work continually grounds how I think about responsibility and impact.
                  </p>
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    I've been privileged to be on the board of non profits I believe in that center tech, equity and justice, and to speak at conferences and contribute to initiatives that center historically excluded communities in tech, including Write Speak Code.
                  </p>
                </div>

                {/* Conference Image */}
                <div ref={imageRef6} className="relative overflow-hidden mt-8 max-w-2xl">
                  <motion.div
                    style={{ y: y6 }}
                    className="w-full h-full"
                  >
                    <img
                      src={conferenceImage}
                      alt="Write Speak Code Conference"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '16/9',
                        filter: 'grayscale(0.3)',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>
              </section>

              {/* Section 6: And Life, Too */}
              <section className="mb-16">
                <h5
                  className="mb-8 text-foreground tracking-wider uppercase"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    lineHeight: '19.6px'
                  }}
                >
                  And Life, Too
                </h5>

                {/* Luna Image */}
                <div ref={imageRef7} className="relative overflow-hidden mb-8 max-w-2xl">
                  <motion.div
                    style={{ y: y7 }}
                    className="w-full h-full"
                  >
                    <img
                      src={lunaImage}
                      alt="Luna, our husky mix"
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '3/4',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '20px',
                      lineHeight: '1.8'
                    }}
                  >
                    Finally, there's Luna, our freight-train-of-fun husky-mix, who brings daily chaos, humor, and perspective, and reminds me that balance is rarely static.
                  </p>
                </div>
              </section>

              {/* Closing */}
              <p
                className="text-foreground pt-8"
                style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: '20px',
                  lineHeight: '1.8',
                  fontStyle: 'italic'
                }}
              >
                Thanks for taking the time to learn more about me.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Music Player */}
      <MusicPlayer />
    </motion.div>
  );
}