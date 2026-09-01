import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE_PATH,
  SITE_ORIGIN,
  personJsonLd,
  robotsTxt,
  sitemapXml,
} from './src/seo/config.ts'

const figmaAssetPlugin = () => ({
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      const filename = id.replace('figma:asset/', '')
      const inAssets = path.resolve(__dirname, 'src/assets', filename)
      const inImports = path.resolve(__dirname, 'src/imports', filename)
      if (fs.existsSync(inAssets)) return inAssets
      if (fs.existsSync(inImports)) return inImports
      return inAssets
    }
  },
})

function seoFilesPlugin(): Plugin {
  const robots = robotsTxt()
  const sitemap = sitemapXml()
  const image = `${SITE_ORIGIN}${OG_IMAGE_PATH}`
  const person = JSON.stringify(personJsonLd())

  return {
    name: 'seo-robots-sitemap',
    transformIndexHtml(html) {
      const tags = [
        `<title>${HOME_TITLE}</title>`,
        `<meta name="description" content="${HOME_DESCRIPTION}" />`,
        `<link rel="canonical" href="${SITE_ORIGIN}/" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${HOME_TITLE}" />`,
        `<meta property="og:description" content="${HOME_DESCRIPTION}" />`,
        `<meta property="og:url" content="${SITE_ORIGIN}/" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta property="og:site_name" content="Roxanne Mustafa" />`,
        `<meta property="og:locale" content="en_US" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${HOME_TITLE}" />`,
        `<meta name="twitter:description" content="${HOME_DESCRIPTION}" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<script type="application/ld+json">${person}</script>`,
      ].join('\n    ')

      return html.replace('<!--seo-head-->', tags)
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end(robots)
          return
        }
        if (url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(sitemap)
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), figmaAssetPlugin(), seoFilesPlugin()],
})
