import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const figmaAssetPlugin = () => ({
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      const filename = id.replace('figma:asset/', '')
      const inAssets = path.resolve(__dirname, 'src/assets', filename)
      const inImports = path.resolve(__dirname, 'src/imports', filename)
      const fs = require('fs')
      if (fs.existsSync(inAssets)) return inAssets
      if (fs.existsSync(inImports)) return inImports
      return inAssets
    }
  },
})

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
})