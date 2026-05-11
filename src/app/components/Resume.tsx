import { motion } from "motion/react";
import { X } from "lucide-react";

interface ResumeProps {
  onClose: () => void;
}

export function Resume({ onClose }: ResumeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 pb-24 px-8 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onClose}
          className="fixed top-24 right-8 md:right-16 z-50 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label="Close resume"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 pb-8 border-b border-border"
        >
          <h2 
            className="mb-6"
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '48px',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#e67ce4'
            }}
          >
            ROXANNE MUSTAFA
          </h2>
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
            I am a Staff Product Designer specializing in AI-enabled developer tools, complex UX systems, and enterprise SaaS PLG. My expertise includes assisted workflows, observability, platform UX and cross functional leadership.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Relevant Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#e67ce4'
                }}
              >
                RELEVANT EXPERIENCE
              </h2>
              
              <div className="space-y-10">
                {/* Chronosphere */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Apr 2023-present</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        Chronosphere
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Staff Product Designer</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Creating strategy for onboarding experience and data-led PIG.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Led Design for Distributed Tracing, Control Plane. Redesigned RCA model flows & created foundations for AI-assisted diagnostics.
                    </li>
                  </ul>
                </div>

                {/* Spotify */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Sep 2021-Jan 2023</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        Spotify Data & Insights
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Design Manager</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Managed 8 designers across ML Platform, Experimentation, Analytics, and Governance.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Established UX metrics, practice maturity, and ecosystem frameworks.
                    </li>
                  </ul>
                </div>

                {/* VMware Tanzu */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Jan 2020-Aug 2021</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        VMware Tanzu Application Modernization
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Design Lead, Staff Product Designer</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Led modernization platform UX.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Built multi-layer enterprise journeys enabling future AI-driven automation pathways.
                    </li>
                  </ul>
                </div>

                {/* VMware Pivotal Tracker */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Jul 2019-Jan 2020</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        VMware Pivotal Tracker
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Design Lead, Staff Product Designer</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Defined and communicate design and product strategy for Program Portfolio.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Led design strategy and process for 3 product designers.
                    </li>
                  </ul>
                </div>

                {/* Pivotal Labs */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Sep 2015-Jul 2019</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        Pivotal Labs
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Senior Product Designer, Consultant, People Manager</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Consulted and enabled clients in agile and lean methodologies.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Created high and low fidelity prototypes and designs that realize business and user objectives.
                    </li>
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Managed Designers, Product Managers and Engineers and communicated growth back to leadership team.
                    </li>
                  </ul>
                </div>

                {/* Nickelish */}
                <div className="group">
                  <div className="flex flex-wrap justify-between items-baseline mb-3 gap-2">
                    <div>
                      <span className="text-sm text-muted-foreground">May 2014-Aug 2015</span>
                      <h3 className="inline ml-4" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#e67ce4' }}>
                        Nickelfish IDM/Endava
                      </h3>
                    </div>
                    <span className="text-sm italic text-muted-foreground">Senior User Experience Designer</span>
                  </div>
                  <ul className="space-y-2 text-foreground leading-relaxed">
                    <li className="pl-4 border-l-2 border-transparent hover:border-[#e67ce4] transition-colors duration-300">
                      Created native app and responsive website/mobile designs for consumer-facing and internal sites.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#e67ce4'
                }}
              >
                EDUCATION & TRAINING
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}>
                    General Assembly <span className="italic text-sm text-muted-foreground">Student, Instructor Assistant</span>
                  </h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="pl-4">8 /19-12/19 • Data Analytics</li>
                    <li className="pl-4">12/15-2/16 • Visual Design</li>
                    <li className="pl-4">12/13-2/14 • User Experience Design Immersion</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}>
                    New York University <span className="italic text-sm text-muted-foreground">Undergraduate and Graduate</span>
                  </h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li className="pl-4">9 /18-8 /01 • Masters of Music, Music Technology</li>
                    <li className="pl-4">9/93-6/97 • Bachelor of Arts, Music and Politics</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-12">
            {/* Core Strengths */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#e67ce4'
                }}
              >
                CORE STRENGTHS
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors duration-300">AI-assisted design workflows</li>
                <li className="hover:text-foreground transition-colors duration-300">Distributed tracing, RCA, Data Viz</li>
                <li className="hover:text-foreground transition-colors duration-300">Developer Experience & Platform UX</li>
                <li className="hover:text-foreground transition-colors duration-300">Research, synthesis, strategy leadership & mentorship</li>
              </ul>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#e67ce4'
                }}
              >
                SKILLS
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors duration-300">Concept & Usability Testing</li>
                <li className="hover:text-foreground transition-colors duration-300">Sketching</li>
                <li className="hover:text-foreground transition-colors duration-300">Rapid Prototyping</li>
                <li className="hover:text-foreground transition-colors duration-300">Ideation/Brainstorming</li>
                <li className="hover:text-foreground transition-colors duration-300">Stakeholder Interviews</li>
                <li className="hover:text-foreground transition-colors duration-300">Contextual Interviews</li>
                <li className="hover:text-foreground transition-colors duration-300">People Management</li>
                <li className="hover:text-foreground transition-colors duration-300">Ethnography</li>
                <li className="hover:text-foreground transition-colors duration-300">Synthesis</li>
                <li className="hover:text-foreground transition-colors duration-300">Competitive Analysis</li>
                <li className="hover:text-foreground transition-colors duration-300">User Testing Co-Creation</li>
                <li className="hover:text-foreground transition-colors duration-300">Content Strategy</li>
                <li className="hover:text-foreground transition-colors duration-300">Storyboarding</li>
                <li className="hover:text-foreground transition-colors duration-300">Facilitation</li>
                <li className="hover:text-foreground transition-colors duration-300">Database Prototyping</li>
                <li className="hover:text-foreground transition-colors duration-300">Data Analysis</li>
                <li className="hover:text-foreground transition-colors duration-300">Data Visualization</li>
                <li className="hover:text-foreground transition-colors duration-300">Observability</li>
              </ul>
            </motion.section>

            {/* Tools */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '18px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#e67ce4'
                }}
              >
                TOOLS
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors duration-300">Anthropic Claude, Open AI ChatGPT</li>
                <li className="hover:text-foreground transition-colors duration-300">Google Gemini, Notebook LM</li>
                <li className="hover:text-foreground transition-colors duration-300">Figma, Figma Make, Figjam</li>
                <li className="hover:text-foreground transition-colors duration-300">Miro, Mural</li>
                <li className="hover:text-foreground transition-colors duration-300">Adobe Suite</li>
                <li className="hover:text-foreground transition-colors duration-300">Github</li>
                <li className="hover:text-foreground transition-colors duration-300">HTML/CSS /SQL</li>
                <li className="hover:text-foreground transition-colors duration-300">Excel/G Sheets/Tableau</li>
              </ul>
            </motion.section>
          </div>
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://bit.ly/RoxanneMustafaResume', '_blank')}
            className="px-8 py-3 border-2 border-[#e67ce4] text-[#e67ce4] hover:bg-[#e67ce4] hover:text-background rounded-full transition-all duration-300"
            style={{
              fontFamily: 'var(--font-lato)',
              fontWeight: 900,
              letterSpacing: '0.1em',
              fontSize: '14px'
            }}
          >
            DOWNLOAD RESUME
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}