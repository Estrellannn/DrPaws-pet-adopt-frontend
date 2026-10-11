import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: {
        // 把 @ 映射到 src 目录
        '@': resolve(__dirname, 'src')
      }
    }
})
