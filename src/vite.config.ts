import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/components': path.resolve(__dirname, './components'),
      '@/styles': path.resolve(__dirname, './styles'),
      'figma:asset/dd91655823aa215811db66ecb73cccd7607f086a.png': path.resolve(__dirname, './assets/dd91655823aa215811db66ecb73cccd7607f086a.png'),
      'figma:asset/afcde4263282c80b75d78e5ade359f73c1dbae80.png': path.resolve(__dirname, './assets/afcde4263282c80b75d78e5ade359f73c1dbae80.png'),
      'figma:asset/37580bb4cfa59eb10ae033d4a76d46140e8629d6.png': path.resolve(__dirname, './assets/37580bb4cfa59eb10ae033d4a76d46140e8629d6.png'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'motion'],
  },
});
