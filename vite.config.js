import { minifyHtml, injectHtml } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
const path = require('path')

module.exports = {
  plugins: [
    vue(),
    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'ProjectName',
        description: 'A single page application created using Vue.js 3'
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/variables";`
      }
    }
  }
}
