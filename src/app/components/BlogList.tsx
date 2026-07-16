import { motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

export interface BlogPostMeta {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPostMeta[];
  onPostClick: (post: BlogPostMeta) => void;
  onClose: () => void;
}

export function BlogList({ posts, onPostClick, onClose }: BlogListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
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
          aria-label="Close blog"
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
            className="mb-4"
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '48px',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#e67ce4'
            }}
          >
            Writing
          </h2>
          <p
            className="text-muted-foreground"
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '18px',
              lineHeight: '1.7'
            }}
          >
            Thinking out loud about design, systems, and the space between the two.
          </p>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.button
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => onPostClick(post)}
              className="text-left group border border-border p-8 hover:border-[#e67ce4] transition-all duration-300 flex flex-col gap-4"
              style={{ borderRadius: '2px' }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase"
                    style={{
                      borderColor: '#e67ce4',
                      color: '#e67ce4',
                      fontFamily: 'var(--font-lato)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className="text-foreground group-hover:text-[#e67ce4] transition-colors duration-300"
                style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '1.4'
                }}
              >
                {post.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-muted-foreground flex-1"
                style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {post.subtitle}
              </p>

              {/* Meta + Arrow */}
              <div className="flex items-center justify-between pt-2 border-t border-border/40">
                <span
                  className="text-muted-foreground text-xs tracking-wider uppercase"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
                >
                  {post.date} · {post.readTime}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-[#e67ce4] group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
