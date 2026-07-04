import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/tools/sassMagic" as *;',
      },
    },
  },
  build: {
    rolldownOptions: {
      onLog(level, log, handler) {
        if (
          level === 'warn' &&
          log.code === 'INVALID_ANNOTATION' &&
          log.id?.includes('node_modules/@vueuse/core/')
        ) {
          return
        }

        handler(level, log)
      },
    },
  },
})
