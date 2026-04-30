import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/dota-2/',
  plugins: [react()],
  server: {
    proxy: {
      '/api/dota': {
        target: 'https://www.dota2.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/dota/, ''),
      },
    },
  },
});
