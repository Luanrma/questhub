import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const workspaceRoot = fileURLToPath(new URL('../..', import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, workspaceRoot, '')

  return {
    root: fileURLToPath(new URL('.', import.meta.url)),
    envDir: workspaceRoot,
    cacheDir: fileURLToPath(new URL('../../node_modules/.vite/apps-web', import.meta.url)),
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  }
})
