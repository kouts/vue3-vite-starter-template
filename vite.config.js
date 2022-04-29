import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
const path = require('path')

module.exports = {
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js 3'
        }
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
