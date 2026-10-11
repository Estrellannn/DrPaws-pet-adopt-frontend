import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      // 把 @ 映射到 src 目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
