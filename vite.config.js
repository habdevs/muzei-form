import { defineConfig } from 'vite'
import { resolve } from 'path'


export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        carousel: resolve(__dirname, 'src/carousel.html')
      }
    },
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
})
