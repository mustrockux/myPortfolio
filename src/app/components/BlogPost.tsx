import { motion } from 'motion/react';
import { ArrowLeft, X } from 'lucide-react';
import type { BlogPostMeta } from './BlogList';

interface BlogPostProps {
  post: BlogPostMeta;
  onClose: () => void;
  onBack: () => void;
}

export function BlogPost({ post, onClose, onBack }: BlogPostProps) {
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
          {/* Tags */}
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
            style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '20px',
              lineHeight: '1.6'
            }}
          >
            {post.subtitle}
          </p>

          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <span
              className="text-muted-foreground text-xs tracking-wider uppercase"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
            >
              {post.date}
            </span>
            <span className="text-border">·</span>
            <span
              className="text-muted-foreground text-xs tracking-wider uppercase"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
            >
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
        >
          <PostBody />
        </motion.div>

        {/* References */}
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
            {[
              { label: 'Nielsen Norman Group — UX vs. Service Design', url: 'https://www.nngroup.com/articles/ux-vs-service-design/' },
              { label: 'UK Government Design Notes — How designers across government are working remotely', url: 'https://designnotes.blog.gov.uk/2020/05/13/how-designers-across-government-are-working-remotely/' },
              { label: 'Nielsen Norman Group — Future-Proof Your UX Career', url: 'https://www.nngroup.com/articles/future-proof-designer/' },
              { label: 'Design Council — Systemic Design Framework', url: 'https://www.designcouncil.org.uk/resources/systemic-design-framework/' },
              { label: 'DORA — Platform Engineering', url: 'https://dora.dev/capabilities/platform-engineering/' },
              { label: 'IDEO — In the Age of AI, Human-Centered Design Is More Crucial Than Ever', url: 'https://www.ideo.com/journal/in-the-age-of-ai-human-centered-design-is-more-crucial-than-ever' },
            ].map((ref, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="text-[#e67ce4] shrink-0"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '13px', fontWeight: 700 }}
                >
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

function PostBody() {
  const prose: { type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'img' | 'intro'; content?: string; items?: string[] }[] = [
    { type: 'intro', content: 'I have spent a significant portion of my career making things that looked really good and solved the wrong problem.' },
    { type: 'p', content: 'Not because I was careless. Because I was screen-first.' },
    { type: 'p', content: 'For most of my early career, the screen was my primary unit of thought. I sketched screens. I connected them into flows. I presented polished screens to executives as proof that the product was taking shape. I received feedback like "can we make this panel feel lighter" and spent three days on it. This is normal. This is how most of us are trained.' },
    { type: 'p', content: 'The problem is that many of the products we are designing now do not behave like a sequence of pages. They behave like systems.' },
    { type: 'p', content: 'They ingest data from multiple sources. They change over time. They respond to permissions, policies, data quality, automations, and conditions that may be completely invisible to the user. Increasingly, they include AI that interprets, recommends, generates, and acts.' },
    { type: 'p', content: 'The screen is still important. It is just no longer sufficient as the primary frame for understanding what we are actually building.' },

    { type: 'h2', content: 'The heatmap that answered the wrong question' },
    { type: 'p', content: 'Let me tell you about one of my favorite mistakes.' },
    { type: 'p', content: 'I was designing Alert Deciphering at Chronosphere — a feature meant to help SREs make sense of alert storms. You know the scenario: something breaks, fifty alerts fire at once, and the person on call has to figure out which one actually matters before their Slack explodes and their VP starts asking questions.' },
    { type: 'p', content: 'I designed a beautiful heatmap.' },
    { type: 'p', content: 'It showed alert volume over time, grouped by label, filterable by severity, notification policy, duration, and more. Visually, it was genuinely satisfying. The interactions were considered. The information density was elegant.' },
    { type: 'p', content: 'There was one small issue.' },
    { type: 'p', content: 'Nobody woke up at 3am and thought: I wonder what the ecosystem of this alert storm looks like across labels over time.' },
    { type: 'p', content: 'They thought: Which alert is the root cause? Which one should I actually care about right now?' },
    { type: 'p', content: 'We had built a sophisticated tool for analyzing alert patterns. Our users needed a tool for triaging alert urgency. These are related problems, but they are not the same problem. And we had spent months optimizing for the version we had designed rather than the question users were actually trying to answer.' },
    { type: 'p', content: 'The heatmap was beautiful. The question it answered was ours, not theirs.' },
    { type: 'img', content: 'Alert Deciphering heatmap — Chronosphere' },

    { type: 'h2', content: 'When we defined the technology instead of the job' },
    { type: 'p', content: 'Around the same time, our team was working on a feature around cost control — a way for teams to manage observability spend at the platform level.' },
    { type: 'p', content: 'Our team wanted to define the semantics of this new technology. What is a sampling rule? What does it control? What does it act on? How do you configure it? When do you need it? How do you use it? We spent real time building out this conceptual model.' },
    { type: 'p', content: 'The problem was we were defining it in isolation.' },
    { type: 'p', content: 'We were not asking: who is actually going to touch this? What are they trying to accomplish when they open this part of the product? What is the mental model of an SRE who has to report budget usage up to a CFO or CTO?' },
    { type: 'p', content: "Nobody opens a product and thinks I want to go create a sampling rule. They think I need to manage my budget or my team is getting charged too much for metrics we don't use or my CTO is asking me why our observability costs tripled." },
    { type: 'p', content: 'The sampling rule is a mechanism. The user\'s goal is something else entirely. And we had built a beautifully coherent semantic for the mechanism without ever clearly connecting it to the goal.' },

    { type: 'h2', content: 'A screen is a snapshot, not the experience' },
    { type: 'p', content: 'This is the thing about screens: a screen captures one moment in a product.' },
    { type: 'p', content: 'It shows the user what the system knows right now, what actions are currently available, and how the product has chosen to represent its internal state.' },
    { type: 'p', content: "But the user's experience usually began much earlier." },
    { type: 'p', content: 'Maybe a developer installed a collector three days ago. Maybe a policy was configured by someone who has since left the team. Maybe an alert was triggered, suppressed, reassigned, or merged with another one before anyone looked at the interface.' },
    { type: 'p', content: 'By the time a user opens your carefully designed screen, the experience has already been shaped by a network of upstream events you may not have mapped at all.' },
    { type: 'p', content: 'What looks like a dashboard problem is often a data model problem. What looks like an onboarding problem is often an ownership problem. What looks like a confusing status label often reflects the fact that the organization itself has never agreed on what "healthy," "configured," "active," or "available" actually mean.' },
    { type: 'p', content: 'The interface exposes these conditions. It does not create them.' },
    { type: 'p', content: 'Service design has long recognized this distinction. Nielsen Norman Group describes user experience as what the user encounters, while service design examines how the organization creates and supports that experience behind the scenes.¹ Government service teams have similarly documented the need to map user needs, journeys, screen flows, and how the whole service operates — not just the visible layer.²' },

    { type: 'h2', content: 'The danger of making the visible layer too early' },
    { type: 'p', content: 'Design tools make it very easy to create visible progress.' },
    { type: 'p', content: 'Within hours, you can produce a polished dashboard, an onboarding wizard, a new navigation structure, or an AI assistant. Components and design systems make the output consistent. Generative tools make it faster.' },
    { type: 'p', content: 'This speed is useful. It is also a trap.' },
    { type: 'p', content: 'A high-fidelity interface feels resolved even when the underlying product model is still completely ambiguous. Once a polished screen exists, the team\'s conversation narrows around it:' },
    { type: 'ul', items: ['Should this panel be on the left or the right?', 'Should this be a modal or a drawer?', 'Should the status indicator be yellow or orange?', 'Can we fit one more filter in here?'] },
    { type: 'p', content: 'These are sometimes legitimate questions. But they are easy questions. And they crowd out the harder ones:' },
    { type: 'ul', items: ['What decision is the user actually trying to make?', 'What information has to be trustworthy for that decision to be safe?', 'Where does that information come from, and who owns it?', 'What happens when sources disagree?', 'Can the action be reversed?', 'What should the system learn from what just happened?'] },
    { type: 'p', content: 'The danger is not that we are designing screens. The danger is that the screen becomes a substitute for understanding the product.' },
    { type: 'p', content: 'Nielsen Norman Group has argued that as standardized components, design systems, and AI reduce the cost of producing UI, the value of design moves further upstream.³ When almost anyone can generate a plausible interface in an afternoon, the differentiating work is defining what the product should understand, how it should behave, and how it should help people make better decisions.' },
    { type: 'p', content: 'Figuring out what color the badge should be is not that work.' },

    { type: 'h2', content: 'Complex products are networks of state' },
    { type: 'p', content: 'This became clearest to me while designing observability and developer tools — a domain where the gap between the screen and the system is particularly unforgiving.' },
    { type: 'p', content: 'An SRE looking at an alert is not simply reading information on a page. They are trying to reconstruct what is happening inside a dynamic technical environment that may have changed three times since the alert fired.' },
    { type: 'p', content: 'The alert has a history. It came from a rule. The rule evaluated telemetry. The telemetry came from services and infrastructure. The data may have been transformed, aggregated, delayed, sampled, or mislabeled along the way. The alert may be one symptom of a broader incident. Someone else may already be investigating it. An automation may have already acted on it. The problem may have resolved before the UI updated.' },
    { type: 'p', content: 'This is why a beautifully designed red status badge can still fail completely.' },
    { type: 'p', content: '"Error" describes what the system observed. It does not tell you what failed, when it failed, whether it is still failing, what you should do, or whether you are even the right person to act.' },
    { type: 'p', content: 'A screen-centric response redesigns the badge. A systems-oriented response asks: how is status determined? What events contribute to it? How is freshness communicated? Are states mutually exclusive? How does the user move from detection to diagnosis? What feedback does the system receive after someone intervenes?' },
    { type: 'p', content: 'The second response may eventually produce a better badge. But the badge is the endpoint of the reasoning, not the beginning.' },

    { type: 'h2', content: 'Systems thinking changes the questions we ask' },
    { type: 'p', content: 'The Design Council describes systemic design as an acknowledgment of complexity and interconnectedness throughout the design process — asking designers to consider not just individual elements, but their relationships, the structures beneath them, how the system changes over time, and how it interacts with its wider environment.⁴' },
    { type: 'p', content: 'In practice, that means instead of only asking "what does the user do next?" you also ask:' },
    { type: 'ul', items: ['What caused the user to arrive here in the first place?', 'What do they believe is happening?', 'What does the system believe is happening?', 'Where can those two models diverge?', 'What is the cost of getting it wrong?', 'What feedback will change future behavior?'] },
    { type: 'p', content: 'Consider a product that helps teams manage integrations. A screen-based model describes the experience as: browse the catalog, select an integration, complete the setup flow, see a success message. Tidy. Clean. Completely incomplete.' },
    { type: 'p', content: 'In reality, installation involves an administrator, an application owner, a cloud account, credentials, permissions, network access, a collector, expected telemetry, and a waiting period before data appears. The integration can exist in several meaningful states: available but not configured, configured but not connected, connected but receiving no data, receiving partial data, operating normally, operating with warnings, or failing after previously working fine.' },
    { type: 'p', content: 'A single "installed" state hides most of what matters.' },

    { type: 'h2', content: 'Good systems reduce cognitive load — not by hiding complexity, but by absorbing it' },
    { type: 'p', content: "Designing at the systems level does not mean exposing all the complexity to the user. Quite the opposite." },
    { type: 'p', content: "DORA's platform engineering guidance describes the goal of an internal developer platform as reducing cognitive load by shifting underlying complexity into the platform and providing clear paths for common work.⁵ That is a design problem as much as a technical one." },
    { type: 'p', content: "The goal is not to make a complex system look simple. The goal is to make it understandable enough that the user can act with confidence." },
    { type: 'p', content: 'A simple-looking status that conceals real uncertainty can quietly erode trust. A more considered status that says, in effect, "the integration is configured, but we haven\'t received data in 27 minutes — here are the likely reasons and the person who can help" may appear more complex at a glance. But it dramatically reduces the cognitive work required to understand the situation. That is the job.' },

    { type: 'h2', content: 'AI makes this unavoidable' },
    { type: 'p', content: 'AI is accelerating everything I\'ve described because an AI product is rarely just an interface layered over a deterministic function.' },
    { type: 'p', content: 'It interprets ambiguous input. It retrieves context. It selects tools. It generates plans. It takes actions. It evaluates results. It revises its approach.' },
    { type: 'p', content: 'The visible response — the chat bubble, the generated answer, the suggested action — is only one artifact produced by a much larger system.' },
    { type: 'ul', items: ['What context can the AI access?', 'What does it retain across sessions?', 'Which tools can it use?', 'What permissions constrain it?', 'When must it ask for approval?', 'How does it communicate uncertainty?', 'How can the user inspect what it did?', 'How can they correct it?'] },
    { type: 'p', content: 'A designer who focuses primarily on the chat window will miss most of the product. The chat might be elegant while the permission model is incomprehensible. The generated answer might be concise while the source data is three days stale.' },
    { type: 'p', content: 'IDEO has argued that human-centered design becomes more important, not less, as AI capabilities expand.⁶ Capability alone does not determine whether an AI system is useful, trustworthy, or appropriate. Those qualities emerge from the relationships between the model, tools, data, policies, interface, organization, and user. They emerge from the system.' },

    { type: 'h2', content: 'What to produce before the screen' },
    { type: 'p', content: 'None of this means abandoning interface design or writing forty-page service blueprints before touching Figma. It means choosing representations that match the level of the problem.' },
    { type: 'p', content: 'Before producing polished screens, map:' },
    { type: 'ul', items: [
      'The people — Who participates in the system? Who configures it, monitors it, responds when things go wrong, approves actions, or inherits the consequences?',
      'The states — What meaningful conditions can this product or object be in? How does the user know which one is current? How does it change?',
      'The relationships — What depends on what? Which objects, services, policies, and people are connected?',
      'The decisions — What is the user actually trying to determine? What evidence is required? What uncertainty exists? What happens when they\'re wrong?',
      'The loops — What action does the user take? What result follows? How is that result observed? What does the system learn?',
      'The boundaries — What is this product responsible for? What lives elsewhere? Where does the experience cross tools, teams, channels, or organizations?',
    ] },
    { type: 'p', content: 'These models do not replace screens. They make the screens more honest.' },

    { type: 'h2', content: 'The screen is still where the system becomes human' },
    { type: 'p', content: 'There is a risk that systems thinking becomes self-indulgent.' },
    { type: 'p', content: 'Designers can produce intricate diagrams that explain the organization brilliantly while failing to improve the experience of an actual person trying to complete an actual task. I have done this. It feels very smart in the moment. It is not always useful.' },
    { type: 'p', content: 'The solution is not to choose between systems and interfaces. It is to connect them.' },
    { type: 'p', content: 'A well-designed screen compresses a great deal of systems reasoning into a usable moment. It gives the user the right information without requiring them to understand every upstream dependency. It reveals complexity when complexity matters. It communicates uncertainty without creating paralysis. It provides a clear next action without pretending there is only one possible path.' },
    { type: 'p', content: 'That is genuinely difficult work. It is also where design becomes most valuable.' },

    { type: 'h2', content: 'Our unit of design should be the outcome' },
    { type: 'p', content: 'A user does not want to arrive at a screen.' },
    { type: 'p', content: 'They want to understand why their service is failing. They want to safely configure an integration. They want to know whether an alert requires action or can wait until morning. They want to recover from an incident without losing their mind. They want to use an AI agent without surrendering control of what happens next.' },
    { type: 'p', content: 'Screens help make those outcomes possible. But no individual screen owns the outcome. The outcome belongs to the system.' },
    { type: 'p', content: 'So perhaps the most important shift is not from screen design to service design, or from UI to systems thinking. It is from designing artifacts to designing conditions.' },
    { type: 'ul', items: [
      'Conditions in which the right information appears at the right moment.',
      'Conditions in which people understand the state of their system.',
      'Conditions in which responsibility is clear.',
      'Conditions in which action produces visible feedback.',
      'Conditions in which the user can move forward with justified confidence.',
    ] },
    { type: 'p', content: 'We will keep designing screens. That part is not going away.' },
    { type: 'p', content: 'But the strongest designers I know understand that the screen is where their work becomes visible — not where the work begins.' },
  ];

  return (
    <div className="space-y-6">
      {prose.map((block, i) => {
        if (block.type === 'intro') {
          return (
            <p key={i} style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '22px',
              lineHeight: '1.8',
              fontStyle: 'italic',
              color: 'var(--foreground)'
            }}>
              {block.content}
            </p>
          );
        }
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="pt-6" style={{
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: '1.3',
              color: 'var(--foreground)'
            }}>
              {block.content}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#e67ce4'
            }}>
              {block.content}
            </h3>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="space-y-2 pl-6">
              {block.items?.map((item, j) => (
                <li key={j} className="relative" style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontSize: '18px',
                  lineHeight: '1.75',
                  color: 'var(--foreground)'
                }}>
                  <span className="absolute -left-4 text-[#e67ce4]">–</span>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'img') {
          return (
            <figure key={i} className="my-10">
              <div className="border border-border rounded overflow-hidden">
                <img
                  src="/src/imports/alert-deciphering-heatmap.png"
                  alt={block.content}
                  className="w-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <figcaption className="mt-3 text-center text-muted-foreground" style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {block.content}
              </figcaption>
            </figure>
          );
        }
        return (
          <p key={i} style={{
            fontFamily: '"EB Garamond", Georgia, serif',
            fontSize: '18px',
            lineHeight: '1.8',
            color: 'var(--foreground)'
          }}>
            {block.content}
          </p>
        );
      })}
    </div>
  );
}
