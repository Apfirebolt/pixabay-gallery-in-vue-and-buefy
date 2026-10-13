import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    environment: 'happy-dom',
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://softgenie.org',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})