import { motion, useScroll, useTransform } from "motion/react";
import type { Project } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChronosphereThumbnail } from "./ChronosphereThumbnail";
import { DistributedTracingVisual } from "./DistributedTracingVisual";
import { TraceControlPlaneVisual } from "./TraceControlPlaneVisual";
import { DeveloperOnboardingVisual } from "./DeveloperOnboardingVisual";
import { DifferentialDiagnosisVisual } from "./DifferentialDiagnosisVisual";
import { AlertDecipheringVisual } from "./AlertDecipheringVisual";
import { CommentsAndCollaborationVisual } from "./CommentsAndCollaborationVisual";
import { useRef } from "react";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

function ProjectCard({ project, index, onProjectClick }: { project: Project; index: number; onProjectClick: (project: Project) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1 0"]
  });

  // Subtle parallax effect - images move slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  // Define color schemes for Chronosphere projects
  const getChronosphereAccentColor = (title: string) => {
    if (title.includes("Distributed Tracing")) return "#22c55e"; // Green for tracing
    if (title.includes("Differential Diagnosis")) return "#22c55e"; // Green for diagnosis
    if (title.includes("Alert Deciphering")) return "#3b82f6"; // Blue for alerts
    if (title.includes("Comments")) return "#a855f7"; // Purple for collaboration
    return "#22c55e";
  };

  const isChronosphereProject = (client: string) => client === "Chronosphere";

  const isFullBleed = (title: string) => title.includes("Alert Deciphering");

  const isDarkMode = (client: string) => client === "VMware";

  const getZoomLevel = (title: string) => {
    if (title.includes("Distributed Tracing")) return 1.3; // Zoom in on distributed tracing
    return 1;
  };

  const getBrightness = (title: string) => {
    if (title.includes("Differential Diagnosis")) return 0.95; // Reduce exposure on DDx
    return 1.15;
  };

  const getObjectPosition = (title: string) => {
    if (title.includes("Differential Diagnosis")) return "top -160px center"; // Move DDx image up to remove Chronosphere text
    if (title.includes("Developer Onboarding")) return "top -30px center"; // Move Developer Onboarding image up by 30px
    if (title.includes("Comments &")) return "center"; // Center alignment to match Trace Control Plane
    if (title.includes("Trace Control Plane")) return "center"; // Center the control plane image vertically
    return "top";
  };

  return (
    <motion.div
      ref={cardRef}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer relative"
      onClick={() => onProjectClick(project)}
    >
      {/* Project Info - Minimal */}
      <div className="mb-1">
        <h3 
          className="leading-[1.1] group-hover:opacity-60 transition-opacity duration-500"
          style={{ fontSize: '38px' }}
        >
          {project.title}
        </h3>
        
        <div className="flex items-center gap-4 text-muted-foreground mt-1 mb-2">
          <span className="text-sm tracking-wider uppercase">{project.client}</span>
          <span className="text-sm">·</span>
          <span className="text-sm tracking-wider uppercase">{project.year}</span>
        </div>

        {/* Tags */}
        <div className={`flex flex-wrap gap-1.5 ${
          project.title.includes("Comments &") || project.title.includes("Trace Control Plane") 
            ? "mb-8" 
            : "mb-4"
        }`}>
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-0.5 rounded-full border"
              style={{
                borderColor: '#e67ce4',
                backgroundColor: '#e67ce4',
                color: '#FFFFFF',
                fontFamily: 'var(--font-lato)',
                fontWeight: 700,
                fontSize: '10px',
                letterSpacing: '0.05em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-border mb-4"></div>
      </div>

      {/* Image Container - Photography Focused with Parallax */}
      <motion.div 
        className="relative aspect-[16/9] overflow-hidden bg-transparent flex items-center justify-center"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          style={{ y, opacity, position: 'relative' }}
          className="w-full h-full"
        >
          {project.title.includes("Distributed Tracing") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <DistributedTracingVisual />
            </div>
          ) : project.title.includes("Developer Onboarding") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <DeveloperOnboardingVisual />
            </div>
          ) : project.title.includes("Trace Control Plane") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <TraceControlPlaneVisual />
            </div>
          ) : project.title.includes("Differential Diagnosis") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <DifferentialDiagnosisVisual />
            </div>
          ) : project.title.includes("Alert Deciphering") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <AlertDecipheringVisual />
            </div>
          ) : project.title.includes("Comments") ? (
            <div className="w-full h-full flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
              <CommentsAndCollaborationVisual />
            </div>
          ) : isChronosphereProject(project.client) ? (
            <ChronosphereThumbnail
              src={project.coverImage}
              alt={project.title}
              accentColor={getChronosphereAccentColor(project.title)}
              fullBleed={isFullBleed(project.title)}
              zoom={getZoomLevel(project.title)}
              brightness={getBrightness(project.title)}
              objectPosition={getObjectPosition(project.title)}
            />
          ) : (
            <motion.div
              className="w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ImageWithFallback
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{
                  filter: isDarkMode(project.client) 
                    ? 'brightness(1.1) contrast(1.15) saturate(1.05)' 
                    : `brightness(${getBrightness(project.title)}) contrast(1.1) saturate(1.05)`,
                  imageRendering: 'crisp-edges',
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-20 relative">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  );
}