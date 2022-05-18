import type {} from 'vitest/config'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/setup-test.ts'],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['react', 'vue'],
    }),
  ],
})
