import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('bootstrap')) return 'vendor-bootstrap'
            if (id.includes('swiper')) return 'vendor-swiper'
            if (/[\\/](vue|@vue|vue-router|pinia)[\\/]/.test(id)) return 'vendor-vue'
            if (id.includes('axios')) return 'vendor-axios'
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 5175,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
