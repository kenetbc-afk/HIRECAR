import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      input: 'src/index.html',
      output: {
        manualChunks: {
          gsap: ['gsap'],
          plyr: ['plyr'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
    hmr: true,
  },
  optimizeDeps: {
    include: ['gsap', 'plyr'],
  },
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.mp3'],
});
