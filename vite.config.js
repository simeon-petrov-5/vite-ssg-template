import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
        /\.js$/,
      ],
      imports: [
        'vue', 'vue-router', { '@vueuse/head': ['useHead'] }
      ],

    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
