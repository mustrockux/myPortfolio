import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { Project } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DistributedTracingVisual } from "./DistributedTracingVisual";
import { TraceControlPlaneVisual } from "./TraceControlPlaneVisual";
import { DifferentialDiagnosisVisual } from "./DifferentialDiagnosisVisual";
import { AlertDecipheringVisual } from "./AlertDecipheringVisual";
import { DeveloperOnboardingVisual } from "./DeveloperOnboardingVisual";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
}

export function ProjectDetail({ project, onClose, onNext }: ProjectDetailProps) {
  return (
    <motion.div
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
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Navigation - Duplicate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 pb-8 border-b border-border flex flex-col sm:flex-row justify-between gap-6"
          >
            <button
              onClick={onClose}
              className="group flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">Back to my work</span>
            </button>
            <button
              onClick={onNext}
              className="group flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity duration-300 sm:ml-auto self-end sm:self-auto"
            >
              <span className="text-lg">Next project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* MY WORK H2 Header */}
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
            MY WORK
          </h2>

          {/* Project Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#e67ce4] mb-3"
            style={{ 
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '48px',
              lineHeight: '1.4',
              fontWeight: 400
            }}
          >
            {project.title}
          </motion.h3>

          {/* Project Meta */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-6 text-sm tracking-wider uppercase">{project.client} · {project.year}</p>
            
            {/* Tags - Matching home page design */}
            <div className="flex flex-wrap gap-1.5 mb-8">
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

            <p 
              className="text-foreground"
              style={{
                fontFamily: '"EB Garamond", Georgia, serif',
                fontSize: '20px',
                lineHeight: '1.8'
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Project Images */}
          <div className="space-y-24">
            {project.title.includes("Distributed Tracing") ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative w-full overflow-hidden bg-white rounded-lg p-8 aspect-[16/10]">
                  <DistributedTracingVisual />
                </div>
              </motion.div>
            ) : project.title.includes("Trace Control Plane") ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative w-full overflow-hidden bg-white rounded-lg p-8 aspect-[16/10]">
                  <TraceControlPlaneVisual />
                </div>
              </motion.div>
            ) : project.title.includes("Differential Diagnosis") ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative w-full overflow-hidden bg-white rounded-lg p-8 aspect-[16/10]">
                  <DifferentialDiagnosisVisual />
                </div>
              </motion.div>
            ) : project.title.includes("Alert Deciphering") ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative w-full overflow-hidden bg-white rounded-lg p-8 aspect-[16/10]">
                  <AlertDecipheringVisual />
                </div>
              </motion.div>
            ) : project.title.includes("Developer Onboarding") ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="relative w-full overflow-hidden bg-white rounded-lg p-8 aspect-[16/10]">
                  <DeveloperOnboardingVisual />
                </div>
              </motion.div>
            ) : (
              project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="w-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Case Study Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32 mb-32 max-w-3xl mx-auto text-center"
          >
            <p 
              className="text-muted-foreground tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '14px',
                letterSpacing: '0.1em',
              }}
            >
              Case study coming soon
            </p>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-32 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-6"
          >
            <button
              onClick={onClose}
              className="group flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">Back to my work</span>
            </button>
            <button
              onClick={onNext}
              className="group flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity duration-300 sm:ml-auto self-end sm:self-auto"
            >
              <span className="text-lg">Next project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}