import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Contact Recorder - By Woon & Zorg',
        short_name: 'Contact Recorder',
        description: 'Professionele contactregistratie voor jeugdhulpverleners',
        theme_color: '#2B8CC4',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%232B8CC4" width="192" height="192" rx="40"/><text x="96" y="110" font-size="100" font-weight="bold" fill="white" text-anchor="middle">CR</text></svg>',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
})
