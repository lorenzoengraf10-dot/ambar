import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /ambar/ (username.github.io/ambar/),
// so the build needs that base path — but only there: local dev and a
// future Vercel deploy both serve from the domain root. GITHUB_ACTIONS is
// set automatically by GitHub's own runners, so this needs no extra config.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/ambar/' : '/',
})
