import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/articles', baseRoute: 'articles' }
      ],
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'mdx'],
    }),
    Markdown({
      headEnabled: true,
      frontmatter:true,
      exposeFrontmatter:true,
      exposeExcerpt:true,
      markdownItUses: [
        prism,
      ],
    }),
    AutoImport({
      include: [
        /\.vue$/, /\.vue\?vue/,
        /\.js$/,
      ],
      imports: [
        'vue', 'vue-router', { '@vueuse/head': ['useHead'] }
      ],

    }),
  ],
  optimizeDeps: {
    exclude: ['fs']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
