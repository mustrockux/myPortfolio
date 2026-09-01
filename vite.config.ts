import { defineConfig, type Plugin } from 'vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import {
  INDEXABLE_PATHS,
  canonicalUrl,
  getSeoPage,
  htmlFileForPath,
  normalizePathname,
  robotsTxt,
  seoHeadMarkup,
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

const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/

function applySeoHead(html: string, pathname: string): string {
  const markup = seoHeadMarkup(getSeoPage(pathname))
  if (html.includes('<!--seo-head-->')) {
    return html.replace('<!--seo-head-->', markup)
  }
  if (SEO_BLOCK.test(html)) {
    return html.replace(SEO_BLOCK, markup)
  }
  return html.replace('</head>', `    ${markup}\n  </head>`)
}

function requestPathname(req: IncomingMessage): string {
  return normalizePathname(req.url ?? '/')
}

function trySendPrerenderedHtml(
  distDir: string,
  req: IncomingMessage,
  res: ServerResponse,
): boolean {
  const pathname = requestPathname(req)
  const relative = htmlFileForPath(pathname)
  const file = path.join(distDir, relative)
  if (!fs.existsSync(file)) {
    return false
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(fs.readFileSync(file, 'utf8'))
  return true
}

function seoFilesPlugin(): Plugin {
  const robots = robotsTxt()
  const sitemap = sitemapXml()

  return {
    name: 'seo-prerender',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const pathname = normalizePathname(ctx.originalUrl ?? ctx.path ?? '/')
        return applySeoHead(html, pathname)
      },
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = requestPathname(req)
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
    configurePreviewServer(server) {
      const distDir = path.resolve(__dirname, 'dist')
      server.middlewares.use((req, res, next) => {
        if (trySendPrerenderedHtml(distDir, req, res)) {
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const templatePath = path.join(distDir, 'index.html')
      if (!fs.existsSync(templatePath)) {
        throw new Error('SEO prerender expected dist/index.html after build')
      }
      const template = fs.readFileSync(templatePath, 'utf8')

      for (const route of INDEXABLE_PATHS) {
        const html = applySeoHead(template, route)
        const output = path.join(distDir, htmlFileForPath(route))
        fs.mkdirSync(path.dirname(output), { recursive: true })
        fs.writeFileSync(output, html)

        const page = getSeoPage(route)
        const canonical = canonicalUrl(route)
        if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
          throw new Error(`Prerender missing canonical for ${route}`)
        }
        if (!html.includes(`<meta name="description" content="`)) {
          throw new Error(`Prerender missing description for ${route}`)
        }
        if (!html.includes(page.title.replaceAll('&', '&amp;'))) {
          throw new Error(`Prerender missing title for ${route}`)
        }
      }

      const aboutHtml = fs.readFileSync(path.join(distDir, 'about.html'), 'utf8')
      if (!aboutHtml.includes('"@type":"ProfilePage"')) {
        throw new Error('Prerendered /about is missing ProfilePage JSON-LD')
      }
      const homeHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
      if (!homeHtml.includes('"@type":"Person"')) {
        throw new Error('Prerendered / is missing Person JSON-LD')
      }
      if (homeHtml.includes(getSeoPage('/about').title)) {
        throw new Error('Homepage HTML unexpectedly contains the about title')
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), figmaAssetPlugin(), seoFilesPlugin()],
  preview: {
    // Serve prerendered HTML for SEO routes before the SPA fallback.
  },
})
