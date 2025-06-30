import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'react-icons'],
          charts: ['echarts', 'echarts-for-react'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/analytics']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/firestore', 'firebase/analytics', 'firebase/auth', 'firebase/storage']
  },
  define: {
    global: 'globalThis',
  }
});