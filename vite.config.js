import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'ProjectName',
          description: 'A single page application created using Vue.js 3',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~bootstrap': 'bootstrap',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/variables" as *;`,
      },
    },
  },
  test: {
    globals: true,
    globalSetup: './tests/vitest.global-setup.js',
    setupFiles: ['./tests/vitest.globals.js'],
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'json'],
    },
  },
})
