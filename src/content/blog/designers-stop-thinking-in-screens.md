---
id: designers-stop-thinking-in-screens
title: Designers Should Stop Thinking in Screens
subtitle: And other things I had to learn the hard way.
date: July 2026
readTime: 14 min read
tags: Systems Thinking, Product Design, AI
---

*I have spent a significant portion of my career making things that looked really good and solved the wrong problem.*

Not because I was careless. Because I was screen-first.

For most of my early career, the screen was my primary unit of thought. I sketched screens. I connected them into flows. I presented polished screens to executives as proof that the product was taking shape. I received feedback like "can we make this panel feel lighter" and spent three days on it. This is normal. This is how most of us are trained.

The problem is that many of the products we are designing now do not behave like a sequence of pages. They behave like systems.

They ingest data from multiple sources. They change over time. They respond to permissions, policies, data quality, automations, and conditions that may be completely invisible to the user. Increasingly, they include AI that interprets, recommends, generates, and acts.

The screen is still important. It is just no longer sufficient as the primary frame for understanding what we are actually building.

## The heatmap that answered the wrong question

Let me tell you about one of my favorite mistakes.

I was designing Alert Deciphering at Chronosphere — a feature meant to help SREs make sense of alert storms. You know the scenario: something breaks, fifty alerts fire at once, and the person on call has to figure out which one actually matters before their Slack explodes and their VP starts asking questions.

I designed a beautiful heatmap.

It showed alert volume over time, grouped by label, filterable by severity, notification policy, duration, and more. Visually, it was genuinely satisfying. The interactions were considered. The information density was elegant.

There was one small issue.

Nobody woke up at 3am and thought: I wonder what the ecosystem of this alert storm looks like across labels over time.

They thought: Which alert is the root cause? Which one should I actually care about right now?

We had built a sophisticated tool for analyzing alert patterns. Our users needed a tool for triaging alert urgency. These are related problems, but they are not the same problem. And we had spent months optimizing for the version we had designed rather than the question users were actually trying to answer.

The heatmap was beautiful. The question it answered was ours, not theirs.

![Alert Deciphering heatmap — Chronosphere](/src/imports/alert-deciphering-heatmap.png)

## When we defined the technology instead of the job

Around the same time, our team was working on a feature around cost control — a way for teams to manage observability spend at the platform level.

Our team wanted to define the semantics of this new technology. What is a sampling rule? What does it control? What does it act on? How do you configure it? When do you need it? How do you use it? We spent real time building out this conceptual model.

The problem was we were defining it in isolation.

We were not asking: who is actually going to touch this? What are they trying to accomplish when they open this part of the product? What is the mental model of an SRE who has to report budget usage up to a CFO or CTO?

Nobody opens a product and thinks *I want to go create a sampling rule*. They think *I need to manage my budget* or *my team is getting charged too much for metrics we don't use* or *my CTO is asking me why our observability costs tripled*.

The sampling rule is a mechanism. The user's goal is something else entirely. And we had built a beautifully coherent semantic for the mechanism without ever clearly connecting it to the goal.

## A screen is a snapshot, not the experience

This is the thing about screens: a screen captures one moment in a product.

It shows the user what the system knows right now, what actions are currently available, and how the product has chosen to represent its internal state.

But the user's experience usually began much earlier.

Maybe a developer installed a collector three days ago. Maybe a policy was configured by someone who has since left the team. Maybe an alert was triggered, suppressed, reassigned, or merged with another one before anyone looked at the interface.

By the time a user opens your carefully designed screen, the experience has already been shaped by a network of upstream events you may not have mapped at all.

What looks like a dashboard problem is often a data model problem. What looks like an onboarding problem is often an ownership problem. What looks like a confusing status label often reflects the fact that the organization itself has never agreed on what "healthy," "configured," "active," or "available" actually mean.

The interface exposes these conditions. It does not create them.

Service design has long recognized this distinction. Nielsen Norman Group describes user experience as what the user encounters, while service design examines how the organization creates and supports that experience behind the scenes.¹ Government service teams have similarly documented the need to map user needs, journeys, screen flows, and how the whole service operates — not just the visible layer.²

## The danger of making the visible layer too early

Design tools make it very easy to create visible progress.

Within hours, you can produce a polished dashboard, an onboarding wizard, a new navigation structure, or an AI assistant. Components and design systems make the output consistent. Generative tools make it faster.

This speed is useful. It is also a trap.

A high-fidelity interface feels resolved even when the underlying product model is still completely ambiguous. Once a polished screen exists, the team's conversation narrows around it:

- Should this panel be on the left or the right?
- Should this be a modal or a drawer?
- Should the status indicator be yellow or orange?
- Can we fit one more filter in here?

These are sometimes legitimate questions. But they are easy questions. And they crowd out the harder ones:

- What decision is the user actually trying to make?
- What information has to be trustworthy for that decision to be safe?
- Where does that information come from, and who owns it?
- What happens when sources disagree?
- Can the action be reversed?
- What should the system learn from what just happened?

The danger is not that we are designing screens. The danger is that the screen becomes a substitute for understanding the product.

Nielsen Norman Group has argued that as standardized components, design systems, and AI reduce the cost of producing UI, the value of design moves further upstream.³ When almost anyone can generate a plausible interface in an afternoon, the differentiating work is defining what the product should understand, how it should behave, and how it should help people make better decisions.

Figuring out what color the badge should be is not that work.

## Complex products are networks of state

This became clearest to me while designing observability and developer tools — a domain where the gap between the screen and the system is particularly unforgiving.

An SRE looking at an alert is not simply reading information on a page. They are trying to reconstruct what is happening inside a dynamic technical environment that may have changed three times since the alert fired.

The alert has a history. It came from a rule. The rule evaluated telemetry. The telemetry came from services and infrastructure. The data may have been transformed, aggregated, delayed, sampled, or mislabeled along the way. The alert may be one symptom of a broader incident. Someone else may already be investigating it. An automation may have already acted on it. The problem may have resolved before the UI updated.

This is why a beautifully designed red status badge can still fail completely.

"Error" describes what the system observed. It does not tell you what failed, when it failed, whether it is still failing, what you should do, or whether you are even the right person to act.

A screen-centric response redesigns the badge. A systems-oriented response asks: how is status determined? What events contribute to it? How is freshness communicated? Are states mutually exclusive? How does the user move from detection to diagnosis? What feedback does the system receive after someone intervenes?

The second response may eventually produce a better badge. But the badge is the endpoint of the reasoning, not the beginning.

## Systems thinking changes the questions we ask

The Design Council describes systemic design as an acknowledgment of complexity and interconnectedness throughout the design process — asking designers to consider not just individual elements, but their relationships, the structures beneath them, how the system changes over time, and how it interacts with its wider environment.⁴

In practice, that means instead of only asking "what does the user do next?" you also ask:

- What caused the user to arrive here in the first place?
- What do they believe is happening?
- What does the system believe is happening?
- Where can those two models diverge?
- What is the cost of getting it wrong?
- What feedback will change future behavior?

Consider a product that helps teams manage integrations. A screen-based model describes the experience as: browse the catalog, select an integration, complete the setup flow, see a success message. Tidy. Clean. Completely incomplete.

In reality, installation involves an administrator, an application owner, a cloud account, credentials, permissions, network access, a collector, expected telemetry, and a waiting period before data appears. The integration can exist in several meaningful states: available but not configured, configured but not connected, connected but receiving no data, receiving partial data, operating normally, operating with warnings, or failing after previously working fine.

A single "installed" state hides most of what matters.

## Good systems reduce cognitive load — not by hiding complexity, but by absorbing it

Designing at the systems level does not mean exposing all the complexity to the user. Quite the opposite.

DORA's platform engineering guidance describes the goal of an internal developer platform as reducing cognitive load by shifting underlying complexity into the platform and providing clear paths for common work.⁵ That is a design problem as much as a technical one.

The goal is not to make a complex system look simple. The goal is to make it understandable enough that the user can act with confidence.

A simple-looking status that conceals real uncertainty can quietly erode trust. A more considered status that says, in effect, "the integration is configured, but we haven't received data in 27 minutes — here are the likely reasons and the person who can help" may appear more complex at a glance. But it dramatically reduces the cognitive work required to understand the situation. That is the job.

## AI makes this unavoidable

AI is accelerating everything I've described because an AI product is rarely just an interface layered over a deterministic function.

It interprets ambiguous input. It retrieves context. It selects tools. It generates plans. It takes actions. It evaluates results. It revises its approach.

The visible response — the chat bubble, the generated answer, the suggested action — is only one artifact produced by a much larger system.

- What context can the AI access?
- What does it retain across sessions?
- Which tools can it use?
- What permissions constrain it?
- When must it ask for approval?
- How does it communicate uncertainty?
- How can the user inspect what it did?
- How can they correct it?

A designer who focuses primarily on the chat window will miss most of the product. The chat might be elegant while the permission model is incomprehensible. The generated answer might be concise while the source data is three days stale.

IDEO has argued that human-centered design becomes more important, not less, as AI capabilities expand.⁶ Capability alone does not determine whether an AI system is useful, trustworthy, or appropriate. Those qualities emerge from the relationships between the model, tools, data, policies, interface, organization, and user. They emerge from the system.

## What to produce before the screen

None of this means abandoning interface design or writing forty-page service blueprints before touching Figma. It means choosing representations that match the level of the problem.

Before producing polished screens, map:

- **The people** — Who participates in the system? Who configures it, monitors it, responds when things go wrong, approves actions, or inherits the consequences?
- **The states** — What meaningful conditions can this product or object be in? How does the user know which one is current? How does it change?
- **The relationships** — What depends on what? Which objects, services, policies, and people are connected?
- **The decisions** — What is the user actually trying to determine? What evidence is required? What uncertainty exists? What happens when they're wrong?
- **The loops** — What action does the user take? What result follows? How is that result observed? What does the system learn?
- **The boundaries** — What is this product responsible for? What lives elsewhere? Where does the experience cross tools, teams, channels, or organizations?

These models do not replace screens. They make the screens more honest.

## The screen is still where the system becomes human

There is a risk that systems thinking becomes self-indulgent.

Designers can produce intricate diagrams that explain the organization brilliantly while failing to improve the experience of an actual person trying to complete an actual task. I have done this. It feels very smart in the moment. It is not always useful.

The solution is not to choose between systems and interfaces. It is to connect them.

A well-designed screen compresses a great deal of systems reasoning into a usable moment. It gives the user the right information without requiring them to understand every upstream dependency. It reveals complexity when complexity matters. It communicates uncertainty without creating paralysis. It provides a clear next action without pretending there is only one possible path.

That is genuinely difficult work. It is also where design becomes most valuable.

## Our unit of design should be the outcome

A user does not want to arrive at a screen.

They want to understand why their service is failing. They want to safely configure an integration. They want to know whether an alert requires action or can wait until morning. They want to recover from an incident without losing their mind. They want to use an AI agent without surrendering control of what happens next.

Screens help make those outcomes possible. But no individual screen owns the outcome. The outcome belongs to the system.

So perhaps the most important shift is not from screen design to service design, or from UI to systems thinking. It is from designing artifacts to designing conditions.

- Conditions in which the right information appears at the right moment.
- Conditions in which people understand the state of their system.
- Conditions in which responsibility is clear.
- Conditions in which action produces visible feedback.
- Conditions in which the user can move forward with justified confidence.

We will keep designing screens. That part is not going away.

But the strongest designers I know understand that the screen is where their work becomes visible — not where the work begins.

---

## References

1. [Nielsen Norman Group — UX vs. Service Design](https://www.nngroup.com/articles/ux-vs-service-design/)
2. [UK Government Design Notes — How designers across government are working remotely](https://designnotes.blog.gov.uk/2020/05/13/how-designers-across-government-are-working-remotely/)
3. [Nielsen Norman Group — Future-Proof Your UX Career](https://www.nngroup.com/articles/future-proof-designer/)
4. [Design Council — Systemic Design Framework](https://www.designcouncil.org.uk/resources/systemic-design-framework/)
5. [DORA — Platform Engineering](https://dora.dev/capabilities/platform-engineering/)
6. [IDEO — In the Age of AI, Human-Centered Design Is More Crucial Than Ever](https://www.ideo.com/journal/in-the-age-of-ai-human-centered-design-is-more-crucial-than-ever)
