export const SITE_ORIGIN = 'https://www.roxannemustafa.com'

export const PERSON_ID = `${SITE_ORIGIN}/#person`

export const LINKEDIN_URL = 'https://www.linkedin.com/in/roxannemustafa'

export const OG_IMAGE_PATH = '/og-image.png'

export const HOME_TITLE =
  'Roxanne Mustafa | Staff Product Designer, AI & Developer Tools'

/** Indexed in meta description and Person JSON-LD rather than on-page copy. */
export const IDENTITY_DESCRIPTION =
  'Roxanne Mustafa is a Staff Product Designer focused on AI, developer tools, observability, and complex enterprise software.'

export const HOME_DESCRIPTION = `${IDENTITY_DESCRIPTION} Explore selected product design case studies and leadership work.`

export const HOME_H1 = 'Roxanne Mustafa'

export const HOME_POSITIONING =
  'Staff Product Designer working across AI, developer tools, observability, and complex enterprise systems.'

export const HOME_INTRO =
  'I design complex technical products for engineers and enterprise teams. My work spans AI, developer tools, observability, machine learning, and infrastructure, turning technically dense systems into products people can understand and act on.'

export const ABOUT_TITLE = 'About Roxanne Mustafa | Staff Product Designer'

export const ABOUT_DESCRIPTION = IDENTITY_DESCRIPTION

export const ABOUT_BIO = [
  'Across her career, Roxanne has designed products and platforms for engineers, data teams, and technical organizations. Her work spans developer experience, machine learning and experimentation, application modernization, cloud infrastructure, and observability.',
  'She has worked across design leadership and senior individual contributor roles at organizations including Pivotal, VMware, Spotify, and Chronosphere. Her approach combines product strategy, systems thinking, user research, interaction design, and close collaboration with engineering and product teams.',
  'More recently, she is a Senior Staff Product designer focusing on how AI changes the way engineers investigate systems, make decisions, and operate complex infrastructure, including knowledge graphs, AI-assisted troubleshooting, and new models for developer platforms, tooling and productivity.',
  'She is particularly interested in design problems where powerful technical systems need to become understandable, trustworthy, and actionable.',
] as const

export const PERSON_NAME = 'Roxanne Mustafa'

export const PERSON_JOB_TITLE = 'Staff Product Designer'

export const PERSON_DESCRIPTION = IDENTITY_DESCRIPTION

export const PERSON_KNOWS_ABOUT = [
  'Product Design',
  'Artificial Intelligence',
  'Developer Tools',
  'Observability',
  'Enterprise Software',
  'Machine Learning',
  'User Experience Design',
] as const

/** Public case studies in the sitemap. Titles/descriptions match src/data/projects.ts. */
export const WORK_PAGES = [
  {
    id: 1,
    title: 'Developer Onboarding',
    description:
      'Designed a comprehensive onboarding experience that guides new developers through the Chronosphere platform. Created interactive tutorials, contextual help, and progressive disclosure patterns that reduce time-to-value and increase product adoption across engineering teams.',
  },
  {
    id: 2,
    title: 'Alert Deciphering',
    description:
      'Designed an intelligent alert management system that helps teams quickly understand and respond to critical system issues. The interface prioritizes clarity and actionability in high-pressure situations.',
  },
  {
    id: 3,
    title: 'Comments & Collaboration',
    description:
      'Created an intuitive commenting and collaboration interface that enables teams to discuss metrics, traces, and alerts in context. Designed threaded conversations and @mentions to facilitate asynchronous team communication and decision-making around observability data.',
  },
  {
    id: 4,
    title: 'Trace Control Plane',
    description:
      'Led the design of a sophisticated control plane for managing distributed tracing at scale. Created intuitive controls for sampling strategies, data retention policies, and trace routing that empower platform teams to optimize observability costs while maintaining critical visibility.',
  },
  {
    id: 5,
    title: 'Differential Diagnosis (DDx)',
    description:
      'Led the design of an advanced differential diagnosis tool that empowers SREs to compare system states and pinpoint root causes. Established a cohesive design system for data-dense interfaces while maintaining clarity and usability.',
  },
  {
    id: 6,
    title: 'Distributed Tracing',
    description:
      'Designed an intuitive distributed tracing interface that helps engineers quickly identify performance bottlenecks across microservices. Created a visual language that transforms complex trace data into actionable insights, reducing mean time to resolution by 60%.',
  },
  {
    id: 7,
    title: 'Data & Insights',
    description:
      "As a Design Lead, I helped lead the creation of a comprehensive data visualization and analytics platform that empowers experimentation engineers, data scientists and machine learning engineers to understand their audience. I also managed product designers to work with cross-functional teams that deliver internal tools that drive strategic insights for Spotify's Engineering Community that serves millions of creators and listeners worldwide.",
  },
  {
    id: 8,
    title: 'Tanzu App Transformer',
    description:
      'As Product Design Lead, designed an innovative platform that helps enterprises modernize legacy applications for cloud-native environments. Translated complex technical workflows into intuitive experiences that accelerate digital transformation initiatives.',
  },
  {
    id: 9,
    title: 'Tracker Redesign',
    description:
      'Served as Product Design Lead and Manager for a complete platform redesign. Modernized the agile project management experience while maintaining the speed and efficiency that teams depend on. Led design strategy, user research, and execution across web and mobile.',
  },
  {
    id: 10,
    title: 'Project Rioja',
    description:
      'Led product design for a sophisticated investment management platform serving institutional clients. Created elegant interfaces for complex financial instruments while ensuring regulatory compliance and building trust through thoughtful design decisions.',
  },
] as const

export const CASE_STUDY_PATHS = WORK_PAGES.map(
  (project) => `/work/${project.id}` as const,
)

export const INDEXABLE_PATHS = ['/', '/about', ...CASE_STUDY_PATHS] as const

export interface SeoPage {
  path: string
  title: string
  description: string
  ogType: 'website' | 'profile'
  jsonLd: unknown[]
}

export function normalizePathname(pathname: string): string {
  const path = pathname.split('?')[0] ?? '/'
  if (path === '' || path === '/') {
    return '/'
  }
  return path.replace(/\/+$/, '')
}

export function getSeoPage(pathname: string): SeoPage {
  const path = normalizePathname(pathname)

  if (path === '/about') {
    return {
      path: '/about',
      title: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      ogType: 'profile',
      jsonLd: [personJsonLd(), profilePageJsonLd()],
    }
  }

  const workMatch = path.match(/^\/work\/(\d+)$/)
  if (workMatch) {
    const work = WORK_PAGES.find((project) => project.id === Number(workMatch[1]))
    if (work) {
      return {
        path,
        title: `${work.title} | Roxanne Mustafa`,
        description: work.description,
        ogType: 'website',
        jsonLd: [personJsonLd()],
      }
    }
  }

  if (path === '/resume') {
    return {
      path: '/resume',
      title: 'Resume | Roxanne Mustafa',
      description: HOME_DESCRIPTION,
      ogType: 'website',
      jsonLd: [personJsonLd()],
    }
  }

  if (path === '/process') {
    return {
      path: '/process',
      title: 'Process | Roxanne Mustafa',
      description: HOME_DESCRIPTION,
      ogType: 'website',
      jsonLd: [personJsonLd()],
    }
  }

  if (path === '/blog') {
    return {
      path: '/blog',
      title: 'Writing | Roxanne Mustafa',
      description: HOME_DESCRIPTION,
      ogType: 'website',
      jsonLd: [personJsonLd()],
    }
  }

  if (path.startsWith('/blog/')) {
    return {
      path,
      title: 'Writing | Roxanne Mustafa',
      description: HOME_DESCRIPTION,
      ogType: 'website',
      jsonLd: [personJsonLd()],
    }
  }

  return {
    path: '/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    ogType: 'website',
    jsonLd: [personJsonLd()],
  }
}

function escapeAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function seoHeadMarkup(page: SeoPage): string {
  const canonical = canonicalUrl(page.path)
  const image = `${SITE_ORIGIN}${OG_IMAGE_PATH}`
  const jsonLd = page.jsonLd
    .map((node) => `<script type="application/ld+json">${JSON.stringify(node)}</script>`)
    .join('\n    ')

  return `<!--seo-start-->
    <title>${escapeAttr(page.title)}</title>
    <meta name="description" content="${escapeAttr(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="Roxanne Mustafa" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${image}" />
    ${jsonLd}
    <!--seo-end-->`
}

export function htmlFileForPath(pathname: string): string {
  const path = normalizePathname(pathname)
  if (path === '/') {
    return 'index.html'
  }
  return `${path.replace(/^\//, '')}.html`
}

export const FEATURED_CASE_STUDY_IDS = [2, 5, 6, 1, 4, 7, 8, 9] as const

export function canonicalUrl(pathname: string): string {
  if (pathname === '/' || pathname === '') {
    return `${SITE_ORIGIN}/`
  }
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${SITE_ORIGIN}${normalized.replace(/\/+$/, '')}`
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON_NAME,
    url: `${SITE_ORIGIN}/`,
    jobTitle: PERSON_JOB_TITLE,
    description: PERSON_DESCRIPTION,
    image: `${SITE_ORIGIN}${OG_IMAGE_PATH}`,
    knowsAbout: [...PERSON_KNOWS_ABOUT],
    sameAs: [LINKEDIN_URL],
  }
}

export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: canonicalUrl('/about'),
    name: ABOUT_TITLE,
    mainEntity: {
      '@id': PERSON_ID,
    },
  }
}

export function robotsTxt(): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
    '',
  ].join('\n')
}

export function sitemapXml(): string {
  const urls = INDEXABLE_PATHS.map((path) => {
    const loc = canonicalUrl(path)
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}
