import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  
  // Serve public folder assets (js/, images etc.)
  publicDir: 'public',

  server: {
    // SPA fallback: all routes serve index.html
  },

  preview: {
    // Same for preview server
    port: 4173,
  },

  build: {
    rollupOptions: {
      // Single entry point; router handles sub-pages client-side
      input: resolve(__dirname, 'index.html'),
    },
  },
})
