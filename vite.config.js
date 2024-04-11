import { defineConfig } from 'vite'
import { resolve } from 'path'
import VitePluginHtml from 'vite-plugin-html'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  plugins: [
    VitePluginHtml({
      inject: {
        data: {
          title: 'My App'
        }
      }
    })
  ]
})
