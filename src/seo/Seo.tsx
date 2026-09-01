import { canonicalUrl, OG_IMAGE_PATH, SITE_ORIGIN } from './config'

interface SeoProps {
  title: string
  description: string
  path: string
  jsonLd?: unknown[]
  ogType?: 'website' | 'profile'
}

export function Seo({ title, description, path, jsonLd = [], ogType }: SeoProps) {
  const canonical = canonicalUrl(path)
  const image = `${SITE_ORIGIN}${OG_IMAGE_PATH}`
  const type = ogType ?? (path === '/about' ? 'profile' : 'website')

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Roxanne Mustafa" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  )
}
