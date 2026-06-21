import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  envDir: fileURLToPath(new URL('../..', import.meta.url)),
  cacheDir: fileURLToPath(new URL('../../node_modules/.vite/apps-web', import.meta.url)),
  plugins: [react()],
})
