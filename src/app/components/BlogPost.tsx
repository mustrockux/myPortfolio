import { motion } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import { marked } from 'marked';
import type { BlogPostMeta } from './BlogList';

// Import all blog markdown files — add a new line here for each post
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

interface BlogPostProps {
  post: BlogPostMeta;
  onClose: () => void;
  onBack: () => void;
}

export function BlogPost({ post, onClose, onBack }: BlogPostProps) {
  const raw = markdownFiles[`/src/content/blog/${post.id}.md`] ?? '';

  // Strip frontmatter and References section (rendered separately in metadata / below)
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n/, '');
  const [bodyRaw, referencesRaw] = withoutFrontmatter.split(/^## References$/m);

  const bodyHtml = marked.parse(bodyRaw ?? '') as string;

  // Parse reference links from the markdown references section
  const refLinks: { label: string; url: string }[] = [];
  if (referencesRaw) {
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    let m;
    while ((m = linkRe.exec(referencesRaw)) !== null) {
      refLinks.push({ label: m[1], url: m[2] });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-32 pb-24 px-8 md:px-16"
    >
      <div className="max-w-[780px] mx-auto">
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onClose}
          className="fixed top-24 right-8 md:right-16 z-50 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Back to Writing */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onBack}
          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-16"
          style={{ fontFamily: 'var(--font-lato)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          ALL POSTS
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase"
                style={{ borderColor: '#e67ce4', color: '#e67ce4', fontFamily: 'var(--font-lato)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="mb-4"
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 400,
              lineHeight: '1.25',
              color: '#e67ce4'
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-muted-foreground mb-6"
            style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '20px', lineHeight: '1.6' }}
          >
            {post.subtitle}
          </p>

          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <span className="text-muted-foreground text-xs tracking-wider uppercase" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}>
              {post.date}
            </span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground text-xs tracking-wider uppercase" style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}>
              {post.readTime}
            </span>
          </div>
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        {/* References */}
        {refLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <h2
              className="mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              References
            </h2>
            <ol className="space-y-3">
              {refLinks.map((ref, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#e67ce4] shrink-0" style={{ fontFamily: 'var(--font-lato)', fontSize: '13px', fontWeight: 700 }}>
                    {i + 1}.
                  </span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-4"
                    style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px' }}
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>
        )}

        {/* Author bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p
            className="text-muted-foreground italic"
            style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: '16px', lineHeight: '1.7' }}
          >
            Roxanne Mustafa is a Staff Product Designer specializing in developer tools, complex UX systems, and enterprise SaaS. She has led design for observability, platform UX, and AI-assisted workflows at Spotify, Chronosphere, and VMware.
          </p>
        </motion.div>

        {/* Bottom nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-foreground hover:opacity-60 transition-opacity duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-lg" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>Back to writing</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
