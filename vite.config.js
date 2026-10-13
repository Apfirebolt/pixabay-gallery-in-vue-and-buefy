import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue(), tailwindcss()],
    server: {
      port: 8080,
      proxy: {
        '/api/pixabay': {
          target: 'https://pixabay.com/api/',
          changeOrigin: true,
          // Strip '/api/pixabay' but keep trailing slash / query params
          rewrite: (path) => path.replace(/^\/api\/pixabay/, ''),
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              // Construct full URL targeting Pixabay API root
              const fullUrl = new URL(proxyReq.path, 'https://pixabay.com');
              
              const apiKey = env.PIXABAY_KEY || env.VITE_PIXABAY_KEY;
              if (apiKey) {
                fullUrl.searchParams.set('key', apiKey);
              }
              
              proxyReq.path = fullUrl.pathname + fullUrl.search;
            });
          }
        }
      }
    }
  };
});