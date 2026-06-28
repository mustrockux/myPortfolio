import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Lightbulb, Pencil, Zap, Search, Settings, Wrench, Users } from 'lucide-react';

interface ProcessPageProps {
  onClose: () => void;
}

export function ProcessPage({ onClose }: ProcessPageProps) {
  const [activePhase, setActivePhase] = useState<number | null>(null);
  const [activeToolCategory, setActiveToolCategory] = useState<string | null>(null);
  const [activePractice, setActivePractice] = useState<string | null>(null);

  const processPhases = [
    {
      icon: Search,
      title: 'Discovery & Research',
      subtitle: 'Understanding the problem space',
      color: 'hsl(301, 68%, 69%)',
      description: 'I start by immersing myself in the problem space through user research, competitive analysis, and stakeholder interviews. I leverage AI-powered tools for sentiment analysis and pattern recognition in large datasets.',
      practices: [
        'User Interviews & Ethnographic Research',
        'Competitive Audits & Benchmarking',
        'AI-Enhanced Data Analysis',
        'Stakeholder Alignment Workshops',
        'Journey Mapping & Pain Point Identification'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Ideation & Synthesis',
      subtitle: 'Collaborative problem-solving',
      color: 'hsl(271, 68%, 69%)',
      description: 'Through design studios and collaborative workshops, I bring cross-functional teams together to generate and refine ideas. AI assists in rapid prototyping and exploring design variations.',
      practices: [
        'Design Studios & Brainstorming Sessions',
        'AI-Generated Design Explorations',
        'Collaborative Workshopping',
        'Rapid Concept Sketching',
        'Design System Integration'
      ]
    },
    {
      icon: Pencil,
      title: 'Design & Prototype',
      subtitle: 'Crafting the experience',
      color: 'hsl(241, 68%, 69%)',
      description: 'I create high-fidelity designs and interactive prototypes that bring ideas to life. Modern tools and AI-powered design assistants help maintain consistency while exploring creative solutions.',
      practices: [
        'High-Fidelity UI Design',
        'Interactive Prototyping',
        'Design System Development',
        'AI-Assisted Component Generation',
        'Accessibility & Inclusive Design'
      ]
    },
    {
      icon: Zap,
      title: 'Test & Iterate',
      subtitle: 'Validating with users',
      color: 'hsl(211, 68%, 69%)',
      description: 'Small releases and continuous feedback loops ensure we\'re building the right thing. AI helps analyze user behavior patterns and predict potential friction points before they impact users.',
      practices: [
        'Usability Testing & A/B Testing',
        'Early Access Programs',
        'AI-Powered Analytics & Insights',
        'Iterative Refinement',
        'Cross-functional Collaboration'
      ]
    }
  ];

  const toolCategories = [
    {
      category: 'Methodologies',
      icon: Search,
      tools: ['Design Thinking', 'Product Development', 'User-Centered Design', 'MCP Protocol', 'Data Analysis']
    },
    {
      category: 'Skills',
      icon: Settings,
      tools: ['User Research', 'Visual Design', 'Interaction Design', 'Facilitation', 'Prototyping']
    },
    {
      category: 'People Skills',
      icon: Users,
      tools: ['Empathy', 'Communication', 'Collaboration', 'Mentorship', 'Stakeholder Management']
    },
    {
      category: 'AI Tools',
      icon: Wrench,
      tools: ['LLMs', 'Vibe Design', 'Deep research & Synthesis', 'Agents & Automation', 'Prompting and Evaluation']
    }
  ];

  const keyPractices = [
    {
      title: 'Brainstorms',
      icon: Users,
      color: 'hsl(271, 68%, 69%)',
      items: ['Research', 'Kickoffs', 'Design Studios', 'Story Mapping']
    },
    {
      title: 'Design Studios',
      icon: Lightbulb,
      color: 'hsl(301, 68%, 69%)',
      items: ['Facilitated Workshops', 'Cross-functional Collaboration', 'Rapid Ideation', 'Concept Validation']
    },
    {
      title: 'Small Releases',
      icon: Zap,
      color: 'hsl(211, 68%, 69%)',
      items: ['Early Access Programs', 'Small Releases', 'User Feedback', 'Iterative Testing']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background z-[100] overflow-y-auto"
    >
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="fixed top-8 right-8 md:right-16 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center z-[110] hover:border-[#e67ce4] hover:text-[#e67ce4] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close"
      >
        <X size={20} />
      </motion.button>

      <div className="px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 
              className="mb-6 text-foreground"
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
            <h2 
              className="text-[#e67ce4] mb-8"
              style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '48px' }}
            >
              Designing with Purpose & Intelligence
            </h2>
            <p 
              className="text-foreground"
              style={{ 
                fontFamily: '"EB Garamond", Georgia, serif',
                fontSize: '20px',
                lineHeight: '1.8'
              }}
            >
              My process blends traditional design thinking with cutting-edge AI capabilities, 
              creating a collaborative workflow that's both human-centered and technologically empowered.
            </p>
          </motion.div>

          {/* Process Phases - Interactive */}
          <div className="mb-20 sm:mb-24 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {processPhases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setActivePhase(isActive ? null : index)}
                    className="group cursor-pointer border-2 border-border/40 rounded-lg p-8 hover:border-[hsl(301,68%,69%)] transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'hsl(301, 68%, 69%, 0.05)' : 'transparent',
                      borderColor: isActive ? phase.color : undefined
                    }}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div 
                        className="p-4 rounded-full transition-all duration-300"
                        style={{ 
                          backgroundColor: isActive ? phase.color : 'hsl(301, 68%, 69%, 0.1)',
                          color: isActive ? 'white' : phase.color
                        }}
                      >
                        <Icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h4 
                          className="mb-2"
                          style={{ 
                            fontFamily: 'var(--font-lato)',
                            fontWeight: 900,
                            fontSize: '18px',
                            color: isActive ? phase.color : 'inherit'
                          }}
                        >
                          {phase.title}
                        </h4>
                        <p 
                          className="text-foreground/60"
                          style={{ fontFamily: 'var(--font-bodoni)', fontSize: '16px' }}
                        >
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="mb-6 text-foreground/90"
                        style={{ fontFamily: 'var(--font-bodoni)', fontSize: '16px', lineHeight: '1.8' }}
                      >
                        {phase.description}
                      </p>
                      <div className="space-y-3">
                        {phase.practices.map((practice, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: phase.color }}
                            />
                            <span 
                              className="text-sm"
                              style={{ fontFamily: 'var(--font-lato)', fontWeight: 600 }}
                            >
                              {practice}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {!isActive && (
                      <div 
                        className="mt-6 text-sm text-foreground/60 group-hover:text-[hsl(301,68%,69%)] transition-colors"
                        style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, letterSpacing: '0.1em' }}
                      >
                        CLICK TO LEARN MORE →
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* AI Integration Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[hsl(301,68%,69%)] rounded-lg p-12 bg-[hsl(301,68%,69%,0.03)] mb-32"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-[hsl(301,68%,69%)] rounded-full">
                <Zap size={32} className="text-white" />
              </div>
              <div>
                <h3 
                  className="mb-6 text-[hsl(301,68%,69%)]"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '28px', fontWeight: 900 }}
                >
                  AI-Augmented Design
                </h3>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-bodoni)' }}
                >
                  Throughout my process, I leverage AI as a collaborative partner. From research to release, I integrate AI tools to augment—not replace—creative problem-solving, ensuring every decision is backed by both data and human insight. This enhances my ability to work faster, explore deeper, and make more informed decisions. The result is a process that's both deeply human-centered and technologically sophisticated, creating products that truly understand and serve their users.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tool Belt - Interactive */}
          <div className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolCategories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeToolCategory === category.category;
                
                return (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, borderColor: 'hsl(301, 68%, 69%)' }}
                    onClick={() => setActiveToolCategory(isActive ? null : category.category)}
                    className="border-2 border-border/40 rounded-lg p-6 cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'hsl(301, 68%, 69%, 0.05)' : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Icon 
                        size={24} 
                        className="text-[hsl(301,68%,69%)]"
                      />
                      <h4 
                        className="text-lg"
                        style={{ fontFamily: 'var(--font-lato)', fontWeight: 900 }}
                      >
                        {category.category}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {category.tools.map((tool, i) => (
                        <div 
                          key={i}
                          className="text-sm px-3 py-2 bg-[hsl(301,68%,69%,0.1)] rounded"
                          style={{ fontFamily: 'var(--font-lato)', fontWeight: 600 }}
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}