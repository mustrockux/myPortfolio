import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ChevronRight } from 'lucide-react';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectDetail } from './components/ProjectDetail';
import { Resume } from './components/Resume';
import { ComingSoon } from './components/ComingSoon';
import { MyProcess } from './components/MyProcess';
import { ProcessPage } from './components/ProcessPage';
import { WhatShapesMe } from './components/WhatShapesMe';
import { ContactForm } from './components/ContactForm';
import { BlogList, type BlogPostMeta } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import balanceIcon from 'figma:asset/92bce02428686bcce9c41d88339ae8a5646ebba0.png';
import penIcon from "figma:asset/6cd455197da7d4377698c1048f1f62600c81c809.png";
import processIcon from "figma:asset/69f971fcb27c459905b38880b1dd3f5e80470fc3.png";
import silhouetteIcon from "figma:asset/536f24100731a9befdf4d6309a65b02ad3e752a4.png";
import envelopeIcon from "figma:asset/64a28fdf8d2a5a7526064de053ab45beae465e54.png";
import resumeIcon from "figma:asset/9db0df807aed7acc3ac181bebee92c4292e50e26.png";
import ddxImage from "figma:asset/59a3acf14a3ec77089ad2f0e718ebacc04bfe3f7.png";
import tanzuImage from "figma:asset/9f27433a26381eeb76fca51157321fc96efbdba6.png";
import pimcoImage from "figma:asset/39dee249425481024c7c65d018b4c9c60f1ab7e3.png";
import onboardingImage from "figma:asset/d10532e2ac62cc0c3ec9f6599a0ed8f441f4b480.png";
import traceControlImage from "figma:asset/5d9c8fef4356aa5715e4c3f61ba6f6300045ab81.png";

export interface Project {
  id: number;
  title: string;
  client: string;
  year: string;
  description: string;
  tags: string[];
  coverImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Developer Onboarding",
    client: "Chronosphere",
    year: "2025",
    description: "Designed a comprehensive onboarding experience that guides new developers through the Chronosphere platform. Created interactive tutorials, contextual help, and progressive disclosure patterns that reduce time-to-value and increase product adoption across engineering teams.",
    tags: ["Design Leadership", "Practice Growth", "Product Strategy", "Service Design", "Visual Design", "X-Function Collaboration"],
    coverImage: onboardingImage,
    images: [onboardingImage]
  },
  {
    id: 2,
    title: "Alert Deciphering",
    client: "Chronosphere",
    year: "2025",
    description: "Designed an intelligent alert management system that helps teams quickly understand and respond to critical system issues. The interface prioritizes clarity and actionability in high-pressure situations.",
    tags: ["AI-Workflow", "Data Visualization", "Design Leadership", "Mentorship", "Product Strategy", "Visual Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwbWFwJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBhbGVydHN8ZW58MXx8fHwxNzY1MjQ2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: ["https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhJTIwbWFwJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBhbGVydHN8ZW58MXx8fHwxNzY1MjQ2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"]
  },
  {
    id: 4,
    title: "Trace Control Plane",
    client: "Chronosphere",
    year: "2024",
    description: "Led the design of a sophisticated control plane for managing distributed tracing at scale. Created intuitive controls for sampling strategies, data retention policies, and trace routing that empower platform teams to optimize observability costs while maintaining critical visibility.",
    tags: ["Data Visualization", "Design Leadership", "Product Strategy", "Visual Design", "X-Function Collaboration"],
    coverImage: traceControlImage,
    images: [traceControlImage]
  },
  {
    id: 5,
    title: "Differential Diagnosis (DDx)",
    client: "Chronosphere",
    year: "2024",
    description: "Led the design of an advanced differential diagnosis tool that empowers SREs to compare system states and pinpoint root causes. Established a cohesive design system for data-dense interfaces while maintaining clarity and usability.",
    tags: ["Data Visualization", "Design Leadership", "Product Strategy", "Visual Design", "X-Function Collaboration"],
    coverImage: ddxImage,
    images: [ddxImage]
  },
  {
    id: 6,
    title: "Distributed Tracing",
    client: "Chronosphere",
    year: "2023",
    description: "Designed an intuitive distributed tracing interface that helps engineers quickly identify performance bottlenecks across microservices. Created a visual language that transforms complex trace data into actionable insights, reducing mean time to resolution by 60%.",
    tags: ["Design Leadership", "Mentorship", "Practice Growth", "Product Strategy", "Visual Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMHRyYWNpbmclMjBtaWNyb3NlcnZpY2VzfGVufDF8fHx8MTc2NTk4NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: ["https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMHRyYWNpbmclMjBtaWNyb3NlcnZpY2VzfGVufDF8fHx8MTc2NTk4NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"]
  },
  {
    id: 3,
    title: "Comments & Collaboration",
    client: "Chronosphere",
    year: "2025",
    description: "Created an intuitive commenting and collaboration interface that enables teams to discuss metrics, traces, and alerts in context. Designed threaded conversations and @mentions to facilitate asynchronous team communication and decision-making around observability data.",
    tags: ["Design Leadership", "Mentorship", "Product Strategy", "Visual Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200",
    images: ["https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200"]
  },
  {
    id: 7,
    title: "Data & Insights",
    client: "Spotify",
    year: "2022",
    description: "As a Design Lead, I helped lead the creation of a comprehensive data visualization and analytics platform that empowers experimentation engineers, data scientists and machine learning engineers to understand their audience. I also managed product designers to work with cross-functional teams that deliver internal tools that drive strategic insights for Spotify's Engineering Community that serves millions of creators and listeners worldwide.",
    tags: ["Data Visualization", "Design Leadership", "Mentorship", "Practice Growth", "Product Strategy", "Service Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsZSUyMHNjcmVlbnMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjU4MzE4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsZSUyMHNjcmVlbnMlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjU4MzE4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"]
  },
  {
    id: 8,
    title: "Tanzu App Transformer",
    client: "VMware",
    year: "2021",
    description: "As Product Design Lead, designed an innovative platform that helps enterprises modernize legacy applications for cloud-native environments. Translated complex technical workflows into intuitive experiences that accelerate digital transformation initiatives.",
    tags: ["Data Visualization", "Design Leadership", "Product Strategy", "Service Design", "Visual Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMG1vZGVybnxlbnwxfHx8fDE3NjU4MzQzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: ["https://images.unsplash.com/photo-1692460049267-4a19daeb3ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMG1vZGVybnxlbnwxfHx8fDE3NjU4MzQzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"]
  },
  {
    id: 9,
    title: "Tracker Redesign",
    client: "Pivotal",
    year: "2019",
    description: "Served as Product Design Lead and Manager for a complete platform redesign. Modernized the agile project management experience while maintaining the speed and efficiency that teams depend on. Led design strategy, user research, and execution across web and mobile.",
    tags: ["Data Visualization", "Design Leadership", "Mentorship", "Practice Growth", "Product Strategy", "Service Design", "X-Function Collaboration"],
    coverImage: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200",
    images: ["https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200&h=1200"]
  },
  {
    id: 10,
    title: "Project Rioja",
    client: "PIMCO",
    year: "2018",
    description: "Led product design for a sophisticated investment management platform serving institutional clients. Created elegant interfaces for complex financial instruments while ensuring regulatory compliance and building trust through thoughtful design decisions.",
    tags: ["Design Leadership", "Practice Growth", "Product Strategy", "Service Design", "Visual Design", "X-Function Collaboration"],
    coverImage: pimcoImage,
    images: [pimcoImage]
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [showResume, setShowResume] = useState(false);
  const [showProcessPage, setShowProcessPage] = useState(false);
  const [showWhatShapesMe, setShowWhatShapesMe] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPostMeta | null>(null);

  const blogPosts: BlogPostMeta[] = [
    {
      id: 'designers-stop-thinking-in-screens',
      title: 'Designers Should Stop Thinking in Screens',
      subtitle: 'And other things I had to learn the hard way.',
      date: 'July 2026',
      readTime: '14 min read',
      tags: ['Systems Thinking', 'Product Design', 'AI'],
    },
  ];
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const savedScrollPosition = useRef<number>(0);
  const lastViewedProjectId = useRef<number | null>(null);

  // Track whether user has scrolled
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle opening a project - save scroll position and scroll to top
  const handleOpenProject = (project: Project) => {
    savedScrollPosition.current = window.scrollY;
    lastViewedProjectId.current = project.id;
    setSelectedProject(project);
    // Delay scroll to top until after exit animation completes (0.3s)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  };

  // Handle closing a project - scroll to the specific project
  const handleCloseProject = () => {
    setSelectedProject(null);
    // Delay scroll to the specific project until after exit animation completes and DOM updates
    setTimeout(() => {
      if (lastViewedProjectId.current) {
        const projectElement = document.getElementById(`project-${lastViewedProjectId.current}`);
        if (projectElement) {
          const yOffset = -120; // Offset for fixed nav + padding
          const y = projectElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // If element not found immediately, try again after a short delay
          setTimeout(() => {
            const projectElement = document.getElementById(`project-${lastViewedProjectId.current}`);
            if (projectElement) {
              const yOffset = -120;
              const y = projectElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 200);
        }
      } else {
        // Fallback to work section if no project ID is saved
        const workSection = document.getElementById('work');
        if (workSection) {
          const yOffset = -120;
          const y = workSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 600); // Increased delay to ensure DOM is fully updated
  };

  // Handle going to next project
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length; // Loop back to first if at end
    const nextProject = projects[nextIndex];
    setSelectedProject(nextProject);
    // Scroll to top immediately for next project (already in detail view)
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navIcons: Record<string, string> = {
    'work': penIcon,
    'process': processIcon,
    'about': silhouetteIcon,
    'contact': envelopeIcon,
    'resume': resumeIcon,
  };

  const filterCategories = [
    "AI-Workflow",
    "Data Visualization",
    "Design Leadership",
    "Mentorship",
    "Practice Growth",
    "Product Strategy",
    "Service Design",
    "Visual Design",
    "X-Function Collaboration"
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredProjects = selectedFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => selectedFilters.includes(tag))
      );

  return (
    <div className="min-h-screen bg-background">
      {/* Coming Soon Page - Full Screen Overlay */}
      <AnimatePresence>
        {showComingSoon && (
          <ComingSoon onClose={() => setShowComingSoon(false)} />
        )}
      </AnimatePresence>

      {/* Process Page - Full Screen Overlay */}
      <AnimatePresence>
        {showProcessPage && (
          <ProcessPage onClose={() => setShowProcessPage(false)} />
        )}
      </AnimatePresence>

      {/* What Shapes Me Page - Full Screen Overlay */}
      <AnimatePresence>
        {showWhatShapesMe && (
          <WhatShapesMe onClose={() => setShowWhatShapesMe(false)} />
        )}
      </AnimatePresence>

      {/* Blog Post - Full Screen Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-background z-[90] overflow-y-auto">
            <BlogPost
              post={selectedPost}
              onClose={() => { setSelectedPost(null); setShowBlog(false); }}
              onBack={() => setSelectedPost(null)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Blog List - Full Screen Overlay */}
      <AnimatePresence>
        {showBlog && !selectedPost && (
          <div className="fixed inset-0 bg-background z-[80] overflow-y-auto">
            <BlogList
              posts={blogPosts}
              onPostClick={(post) => setSelectedPost(post)}
              onClose={() => setShowBlog(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Navigation - Minimal and Clean - Fixed to top */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40"
        style={{ fontFamily: 'var(--font-lato)' }}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 md:px-16 py-4 sm:py-6 flex justify-between items-center">
          <motion.div 
            whileHover={{ opacity: 0.5, color: 'hsl(301, 68%, 69%)' }}
            className="cursor-pointer transition-all duration-100 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3"
            onClick={() => {
              setSelectedProject(null);
              setShowResume(false);
              setShowProcessPage(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span 
              className="tracking-[0.1em]"
              style={{ fontWeight: 900, fontSize: '12px' }}
            >
              ROXANNE MUSTAFA
            </span>
            <span 
              className="tracking-[0.1em] hidden sm:inline"
              style={{ 
                fontWeight: 900, 
                fontSize: '12px',
                textTransform: 'uppercase',
                color: 'hsl(0, 0%, 73%)'
              }}
            >
              PRODUCT DESIGNER & CREATIVE LEADER
            </span>
          </motion.div>
          <div className="flex gap-3 items-center">
            {/* Hamburger Menu Button - Visible on md and below */}
            <motion.button
              whileHover={{ opacity: 0.5 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full border-2 border-foreground flex flex-col items-center justify-center gap-[6px] transition-all duration-100 p-2"
              aria-label="Menu"
            >
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-[2px] bg-foreground origin-center"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-[2px] bg-foreground origin-center"
              />
            </motion.button>

            {/* Social Icons - Always visible */}
            <motion.button
              whileHover={{ opacity: 0.5, borderColor: 'hsl(301, 68%, 69%)', color: 'hsl(301, 68%, 69%)' }}
              onClick={() => setShowContactForm(true)}
              className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-100"
              aria-label="Email"
            >
              <Mail size={16} />
            </motion.button>
            <motion.a 
              whileHover={{ opacity: 0.5, borderColor: 'hsl(301, 68%, 69%)', color: 'hsl(301, 68%, 69%)' }}
              href="https://www.linkedin.com/in/roxannemustafa" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-100"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-[88px] bottom-0 w-[85%] max-w-[400px] bg-background border-l border-border/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col p-8 gap-8" style={{ fontFamily: 'var(--font-lato)' }}>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="#process"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('process');
                      if (element) {
                        const yOffset = -88; // Account for fixed nav height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 300); // Wait for menu close animation
                  }}
                >
                  MY PROCESS
                </motion.a>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="#work"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('work');
                      if (element) {
                        const yOffset = -88; // Account for fixed nav height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 300); // Wait for menu close animation
                  }}
                >
                  MY WORK
                </motion.a>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="#about"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('about');
                      if (element) {
                        const yOffset = -88; // Account for fixed nav height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 300); // Wait for menu close animation
                  }}
                >
                  ABOUT ME
                </motion.a>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="#contact"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        const yOffset = -88; // Account for fixed nav height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }, 300); // Wait for menu close animation
                  }}
                >
                  CONTACT ME
                </motion.a>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="#resume"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      setShowResume(true);
                    }, 300); // Wait for menu close animation
                  }}
                >
                  MY RESUME
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content wrapper with padding for fixed nav */}
      <div className="pt-[88px]">
        {/* Hero Section - Stark and Spacious - Hide immediately when project selected */}
        {!selectedProject && !showResume && !showProcessPage && !showWhatShapesMe && !showBlog && !selectedPost && (
          <AnimatePresence>
            <motion.section 
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="min-h-[calc(100vh-144px)] flex flex-col relative"
            >
              {/* Hero Content - Takes up remaining space */}
              <div className="flex-1 flex items-center justify-center px-8 md:px-16 relative">
                {/* Background balance icon - loads first */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredNavItem ? 0 : 0.4, 
                    scale: 1,
                    rotate: hoveredNavItem ? 0 : [-1.5, 1.5, -1.5]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, ease: "easeOut" },
                    scale: { duration: 0.6, ease: "easeOut" },
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  <img 
                    src={balanceIcon} 
                    alt="" 
                    className="w-full h-full object-contain"
                    style={{ 
                      maxWidth: '1152px',
                      maxHeight: '800px'
                    }}
                  />
                </motion.div>

                {/* Hovered navigation icon - appears on nav hover */}
                <AnimatePresence>
                  {hoveredNavItem && (
                    <motion.div
                      key={hoveredNavItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 0.4, 
                        scale: [1, 1.03, 1]
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        opacity: { duration: 0.6, ease: "easeOut" },
                        scale: { 
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{ zIndex: 0 }}
                    >
                      <img 
                        src={navIcons[hoveredNavItem]} 
                        alt="" 
                        className="w-full h-full object-contain"
                        style={{ 
                          maxWidth: hoveredNavItem === 'contact' || hoveredNavItem === 'resume' ? '600px' : '800px',
                          maxHeight: hoveredNavItem === 'contact' || hoveredNavItem === 'resume' ? '400px' : '500px'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                  className="max-w-5xl mx-auto text-center relative z-10"
                  style={{ marginTop: '-40px' }}
                >
                  <h1 
                    className="relative z-10"
                    style={{ 
                      fontFamily: 'var(--font-bodoni)',
                      fontSize: 'clamp(32px, 8vw, 65px)',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      letterSpacing: '0.05em',
                      wordSpacing: '0.15em',
                      lineHeight: '1.2',
                      textDecoration: 'none',
                      textTransform: 'none',
                      color: '#e67ce4',
                    }}
                  >
                    Design. Balance. Create.
                  </h1>
                </motion.div>
              </div>

            </motion.section>
          </AnimatePresence>
        )}

        {/* Secondary Navigation - starts at bottom of hero, sticks to top on scroll */}
        {!selectedProject && !showResume && !showProcessPage && !showWhatShapesMe && !showBlog && !selectedPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className={`py-4 sm:py-6 px-4 sm:px-8 md:px-16 bg-background/95 backdrop-blur-sm border-t border-border/40 shadow-sm z-40 overflow-x-auto hidden md:block transition-none ${hasScrolled ? 'sticky top-[88px]' : 'fixed bottom-0 left-0 right-0'}`}
            style={{ fontFamily: 'var(--font-lato)' }}
          >
            <div className="max-w-[1800px] mx-auto flex justify-center sm:gap-8 md:gap-12 gap-6 min-w-max sm:min-w-0">
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#process"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredNavItem('process')}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                MY PROCESS
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#work"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredNavItem('work')}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                MY WORK
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#about"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredNavItem('about')}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                ABOUT ME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#contact"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredNavItem('contact')}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                CONTACT ME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#resume"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowResume(true);
                }}
                onMouseEnter={() => setHoveredNavItem('resume')}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                MY RESUME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
              <motion.a
                whileHover={{ color: 'hsl(301, 68%, 69%)' }}
                transition={{ duration: 0.1 }}
                href="#blog"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowBlog(true);
                }}
              >
                MY WRITING
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(301,68%,69%)] group-hover:w-full transition-all duration-100"></span>
              </motion.a>
            </div>
          </motion.div>
        )}

        {/* My Process Section */}
        {!selectedProject && !showResume && !showProcessPage && !showWhatShapesMe && !showBlog && !selectedPost && (
          <MyProcess onLearnMore={() => setShowProcessPage(true)} />
        )}

        {/* Projects Section */}
        <AnimatePresence mode="wait">
          {!selectedProject && !showResume ? (
            <motion.section 
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              id="work" 
              className="py-10 sm:py-12 md:py-16 px-8 md:px-16"
            >
              <div className="max-w-[1800px] mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-16"
                >
                  <h2 
                    className="text-foreground"
                    style={{ 
                      fontFamily: 'var(--font-lato)', 
                      fontSize: '18px',
                      color: '#1a1a1a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 700
                    }}
                  >
                    MY WORK
                  </h2>
                </motion.div>
                
                {/* Filter Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-16"
                  style={{ fontFamily: 'var(--font-lato)' }}
                >
                  <div 
                    className="text-foreground/60 mb-3"
                    style={{
                      fontWeight: 700,
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Filter by
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filterCategories.map((filter) => (
                      <motion.button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 400,
                          damping: 17
                        }}
                        className="px-4 py-1.5 rounded-full border cursor-pointer"
                        style={{
                          borderColor: '#e67ce4',
                          backgroundColor: selectedFilters.includes(filter) ? '#e67ce4' : 'transparent',
                          color: selectedFilters.includes(filter) ? '#FFFFFF' : '#e67ce4',
                          fontWeight: 700,
                          fontSize: '11.5px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {filter}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <ProjectGrid 
                  projects={filteredProjects} 
                  onProjectClick={handleOpenProject}
                />
              </div>
            </motion.section>
          ) : showResume ? (
            <Resume 
              key="resume"
              onClose={() => setShowResume(false)} 
            />
          ) : (
            <ProjectDetail 
              key={selectedProject?.id}
              project={selectedProject} 
              onClose={handleCloseProject}
              onNext={handleNextProject}
            />
          )}
        </AnimatePresence>

        {/* About Me Section */}
        <AnimatePresence mode="wait">
          {!selectedProject && !showResume && !showProcessPage && !showWhatShapesMe && !showBlog && !selectedPost && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              id="about"
              className="py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 bg-background"
            >
              <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
                  
                  {/* Header - Shows first on mobile */}
                  <div className="lg:col-span-12 order-1 lg:hidden">
                    <h2 
                      className="mb-8 text-foreground"
                      style={{ 
                        fontFamily: 'var(--font-lato)', 
                        fontSize: '18px',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700
                      }}
                    >
                      ABOUT ME
                    </h2>
                  </div>

                  {/* Left column - Header + Quote */}
                  <div className="lg:col-span-4 order-2 lg:order-1">
                    <h2 
                      className="mb-16 text-foreground hidden lg:block"
                      style={{ 
                        fontFamily: 'var(--font-lato)', 
                        fontSize: '18px',
                        color: '#1a1a1a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700
                      }}
                    >
                      ABOUT ME
                    </h2>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-[#e67ce4]"
                      style={{ 
                        fontFamily: '"EB Garamond", Georgia, serif',
                        fontSize: '48px',
                        lineHeight: '1.4',
                        fontWeight: 400
                      }}
                    >
                      Design is the art of creating balance
                    </motion.h2>
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
                        <p 
                          className="text-foreground"
                          style={{ 
                            fontFamily: '"EB Garamond", Georgia, serif',
                            fontSize: '20px',
                            lineHeight: '1.8'
                          }}
                        >
                          Between users and platforms. Vision and constraint. Humans and machines. I design experiences that help people stay grounded and in control, no matter how complex the technology.
                        </p>

                        <p 
                          className="text-foreground"
                          style={{ 
                            fontFamily: '"EB Garamond", Georgia, serif',
                            fontSize: '20px',
                            lineHeight: '1.8'
                          }}
                        >
                          I'm motivated by a simple belief that technology should expand human capability, not erode it. The most transformative tools in my life are not the most advanced, but the ones that are founded in real need that are reliable, honest, and empowering.
                        </p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="pt-8 flex flex-wrap gap-4 justify-start"
                      >
                        {/* Secondary Link - Learn More */}
                        <motion.button
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setShowWhatShapesMe(true);
                          }}
                          className="group py-4 text-foreground hover:text-[#e67ce4] transition-all duration-300 flex items-center gap-2"
                          style={{ 
                            fontFamily: 'var(--font-lato)',
                            fontWeight: 700,
                            fontSize: '14px',
                            letterSpacing: '0.1em'
                          }}
                        >
                          LEARN MORE
                          <ChevronRight 
                            size={16} 
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer - Minimal */}
        {!selectedProject && !showResume && !showProcessPage && !showWhatShapesMe && !showBlog && !selectedPost && (
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="py-12 sm:py-16 md:py-20 px-8 md:px-16 border-t border-border"
            id="contact"
          >
            <div className="max-w-[1800px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                
                {/* Header - Shows first on mobile */}
                <div className="lg:col-span-12 order-1 lg:hidden mb-8">
                  <h2 
                    className="text-foreground"
                    style={{ 
                      fontFamily: 'var(--font-lato)', 
                      fontSize: '18px',
                      color: '#1a1a1a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 700
                    }}
                  >
                    CONTACT ME
                  </h2>
                </div>

                {/* Left column - Header + Quote */}
                <div className="lg:col-span-4 order-2 lg:order-1">
                  <h2 
                    className="mb-16 text-foreground hidden lg:block"
                    style={{ 
                      fontFamily: 'var(--font-lato)', 
                      fontSize: '18px',
                      color: '#1a1a1a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontWeight: 700
                    }}
                  >
                    CONTACT ME
                  </h2>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[#e67ce4]"
                    style={{ 
                      fontFamily: '"EB Garamond", Georgia, serif',
                      fontSize: '48px',
                      lineHeight: '1.4',
                      fontWeight: 400
                    }}
                  >
                    Let's work together
                  </motion.h2>
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
                    <p 
                      className="text-foreground mb-8"
                      style={{ 
                        fontFamily: '"EB Garamond", Georgia, serif',
                        fontSize: '20px',
                        lineHeight: '1.8'
                      }}
                    >
                      I'm always interested in hearing about new projects and opportunities.
                    </p>

                    <div className="flex gap-4 items-center">
                      <motion.button
                        whileHover={{ opacity: 0.5, borderColor: 'hsl(301, 68%, 69%)', color: 'hsl(301, 68%, 69%)' }}
                        onClick={() => setShowContactForm(true)}
                        className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-100"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </motion.button>
                      <motion.a 
                        whileHover={{ opacity: 0.5, borderColor: 'hsl(301, 68%, 69%)', color: 'hsl(301, 68%, 69%)' }}
                        href="https://www.linkedin.com/in/roxannemustafa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-100"
                        aria-label="LinkedIn"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.footer>
        )}
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </div>
  );
}