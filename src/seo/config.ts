export const SITE_ORIGIN = 'https://www.roxannemustafa.com'

export const PERSON_ID = `${SITE_ORIGIN}/#person`

export const LINKEDIN_URL = 'https://www.linkedin.com/in/roxannemustafa'

export const OG_IMAGE_PATH = '/og-image.png'

export const HOME_TITLE =
  'Roxanne Mustafa | Staff Product Designer, AI & Developer Tools'

export const HOME_DESCRIPTION =
  'Roxanne Mustafa is a Staff Product Designer specializing in AI, developer tools, observability, and complex enterprise products. Explore selected product design case studies and leadership work.'

export const HOME_H1 = 'Roxanne Mustafa'

export const HOME_POSITIONING =
  'Staff Product Designer working across AI, developer tools, observability, and complex enterprise systems.'

export const HOME_INTRO =
  'I design complex technical products for engineers and enterprise teams. My work spans AI, developer tools, observability, machine learning, and infrastructure, turning technically dense systems into products people can understand and act on.'

export const ABOUT_TITLE = 'About Roxanne Mustafa | Staff Product Designer'

export const ABOUT_DESCRIPTION =
  'Learn about Roxanne Mustafa, a Staff Product Designer specializing in AI, developer tools, observability, enterprise software, and complex technical systems.'

export const ABOUT_H1 = 'About Roxanne Mustafa'

export const ABOUT_BIO = [
  'Roxanne Mustafa is a Staff Product Designer focused on AI, developer tools, observability, and complex enterprise software.',
  'Across her career, Roxanne has designed products and platforms for engineers, data teams, and technical organizations. Her work spans developer experience, machine learning and experimentation, application modernization, cloud infrastructure, and observability.',
  'She has worked across design leadership and senior individual contributor roles at organizations including Pivotal, VMware, Spotify, and Chronosphere. Her approach combines product strategy, systems thinking, user research, interaction design, and close collaboration with engineering and product teams.',
  'More recently, her work has focused on how AI changes the way engineers investigate systems, make decisions, and operate complex infrastructure, including knowledge graphs, AI-assisted troubleshooting, and new models for developer productivity.',
  'She is particularly interested in design problems where powerful technical systems need to become understandable, trustworthy, and actionable.',
] as const

export const PERSON_NAME = 'Roxanne Mustafa'

export const PERSON_JOB_TITLE = 'Staff Product Designer'

export const PERSON_DESCRIPTION =
  'Staff Product Designer specializing in AI, developer tools, observability, and complex enterprise products.'

export const PERSON_KNOWS_ABOUT = [
  'Product Design',
  'Artificial Intelligence',
  'Developer Tools',
  'Observability',
  'Enterprise Software',
  'Machine Learning',
  'User Experience Design',
] as const

/** Public case study routes included in the sitemap. IDs match src/data/projects.ts. */
export const CASE_STUDY_PATHS = [
  '/work/1',
  '/work/2',
  '/work/3',
  '/work/4',
  '/work/5',
  '/work/6',
  '/work/7',
  '/work/8',
  '/work/9',
  '/work/10',
] as const

export const INDEXABLE_PATHS = ['/', '/about', ...CASE_STUDY_PATHS] as const

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
