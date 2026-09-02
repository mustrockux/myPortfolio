import { useState, useRef, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { featuredCaseStudies, projects, type Project } from '../data/projects';
import { Seo } from '../seo/Seo';
import {
  HOME_FOCUS_AREAS,
  HOME_H1,
  LINKEDIN_URL,
  getSeoPage,
  workPath,
} from '../seo/config';
import balanceIcon from 'figma:asset/92bce02428686bcce9c41d88339ae8a5646ebba0.png';
import penIcon from "figma:asset/6cd455197da7d4377698c1048f1f62600c81c809.png";
import processIcon from "figma:asset/69f971fcb27c459905b38880b1dd3f5e80470fc3.png";
import silhouetteIcon from "figma:asset/536f24100731a9befdf4d6309a65b02ad3e752a4.png";
import envelopeIcon from "figma:asset/64a28fdf8d2a5a7526064de053ab45beae465e54.png";
import resumeIcon from "figma:asset/9db0df807aed7acc3ac181bebee92c4292e50e26.png";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

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
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const savedScrollPosition = useRef<number>(0);
  const lastViewedProjectId = useRef<number | null>(null);

  // Derive page state from URL
  const path = location.pathname;
  const showBlog = path === '/blog';
  const selectedPost = path.startsWith('/blog/') ? (blogPosts.find(p => p.id === path.replace('/blog/', '')) ?? null) : null;
  const showResume = path === '/resume';
  const showProcessPage = path === '/process';
  const showWhatShapesMe = path === '/about' || path === '/about-me';
  const workSegment = path.startsWith('/work/') ? path.slice('/work/'.length) : '';
  const selectedProject = workSegment
    ? (projects.find((p) => p.slug === workSegment || String(p.id) === workSegment) ?? null)
    : null;

  useEffect(() => {
    if (path === '/about-me') {
      navigate('/about', { replace: true });
      return;
    }
    if (!workSegment || !selectedProject) return;
    const canonical = workPath(selectedProject);
    if (canonical !== path) {
      navigate(canonical, { replace: true });
    }
  }, [path, workSegment, selectedProject, navigate]);

  // Keep the last viewed case study in sync for every entry path:
  // homepage clicks, /about links, direct URLs, and next-project navigation.
  useEffect(() => {
    if (selectedProject) {
      lastViewedProjectId.current = selectedProject.id;
    }
  }, [selectedProject]);

  // Track whether user has scrolled
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle opening a project - save scroll position and navigate
  const handleOpenProject = (project: Project) => {
    savedScrollPosition.current = window.scrollY;
    lastViewedProjectId.current = project.id;
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 300);
  };

  // Handle closing a project - navigate home and scroll to project
  const handleCloseProject = () => {
    const projectId = selectedProject?.id ?? lastViewedProjectId.current;
    if (projectId != null) {
      lastViewedProjectId.current = projectId;
    }

    navigate('/');
    setTimeout(() => {
      const scrollToProject = () => {
        if (projectId == null) return;
        const el = document.getElementById(`project-${projectId}`);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
      scrollToProject();
      setTimeout(scrollToProject, 200);
      setTimeout(scrollToProject, 800);
    }, 600);
  };

  // Handle going to next project
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    navigate(workPath(nextProject));
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

  const pageSeo = { ...getSeoPage(path) };
  if (selectedPost) {
    pageSeo.title = `${selectedPost.title} | Roxanne Mustafa`;
    pageSeo.description = selectedPost.subtitle;
    pageSeo.path = `/blog/${selectedPost.id}`;
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={pageSeo.path}
        jsonLd={pageSeo.jsonLd}
        ogType={pageSeo.ogType}
      />
      {/* Coming Soon Page - Full Screen Overlay */}
      <AnimatePresence>
        {showComingSoon && (
          <ComingSoon onClose={() => setShowComingSoon(false)} />
        )}
      </AnimatePresence>

      {/* Process Page - Full Screen Overlay */}
      <AnimatePresence>
        {showProcessPage && (
          <ProcessPage onClose={() => navigate('/')} />
        )}
      </AnimatePresence>

      {/* What Shapes Me Page - Full Screen Overlay */}
      <AnimatePresence>
        {showWhatShapesMe && (
          <WhatShapesMe
            onClose={() => navigate('/')}
            caseStudies={featuredCaseStudies}
          />
        )}
      </AnimatePresence>

      {/* Blog Post - Full Screen Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-background z-[90] overflow-y-auto">
            <BlogPost
              post={selectedPost}
              onClose={() => navigate('/')}
              onBack={() => navigate('/blog')}
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
              onPostClick={(post) => navigate(`/blog/${post.id}`)}
              onClose={() => navigate('/')}
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
          <motion.a 
            href="/"
            whileHover={{ opacity: 0.5, color: 'hsl(301, 68%, 69%)' }}
            className="cursor-pointer transition-all duration-100 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
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
          </motion.a>
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
              href={LINKEDIN_URL} 
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
                  href="/about"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => navigate('/about'), 300);
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
                  href="/blog"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => navigate('/blog'), 300);
                  }}
                >
                  MY WRITING
                </motion.a>
                <motion.a
                  whileHover={{ x: 8, color: 'hsl(301, 68%, 69%)' }}
                  href="/resume"
                  className="text-lg tracking-[0.1em] py-3 border-b border-border/30"
                  style={{ fontWeight: 900 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => navigate('/resume'), 300);
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

                {/* Identity and tagline */}
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
                      fontFamily: 'var(--font-lato)',
                      fontWeight: 700,
                      fontSize: '18px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#1a1a1a',
                    }}
                  >
                    {HOME_H1}
                  </h1>
                  <p
                    className="relative z-10 mt-6"
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
                  </p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
                className="absolute bottom-8 md:bottom-10 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontWeight: 700,
                  fontSize: '11.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'hsl(0, 0%, 45%)',
                }}
              >
                {HOME_FOCUS_AREAS.map((area, index) => (
                  <Fragment key={area}>
                    {index > 0 && (
                      <span aria-hidden="true" style={{ color: '#e67ce4' }}>
                        •
                      </span>
                    )}
                    <span>{area}</span>
                  </Fragment>
                ))}
              </motion.p>
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
                href="/about"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
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
                href="/resume"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/resume');
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
                href="/blog"
                className="text-sm tracking-[0.1em] relative group"
                style={{ fontWeight: 900 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/blog');
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
          <MyProcess onLearnMore={() => navigate('/process')} />
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
              onClose={() => navigate('/')}
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
                        <motion.a
                          href="/about"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate('/about');
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
                        </motion.a>
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
                        href={LINKEDIN_URL} 
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
                    <nav
                      aria-label="Footer"
                      className="mt-10 flex flex-wrap gap-6"
                      style={{ fontFamily: 'var(--font-lato)' }}
                    >
                      <a
                        href="/about"
                        className="text-foreground hover:text-[#e67ce4] transition-colors duration-300"
                        style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.1em' }}
                      >
                        About
                      </a>
                      <a
                        href="/#work"
                        className="text-foreground hover:text-[#e67ce4] transition-colors duration-300"
                        style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '0.1em' }}
                      >
                        Work
                      </a>
                    </nav>
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