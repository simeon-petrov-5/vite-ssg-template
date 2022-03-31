import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/blog', baseRoute: 'blog' }
      ],
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'md'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'general'
    }),
    Markdown({
      headEnabled: true,
      frontmatter: true,
      exposeFrontmatter: true,
      exposeExcerpt: true,
      markdownItSetup(md) {
        md.use(require('markdown-it-anchor'))
        md.use(require('markdown-it-prism'))
      },
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
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
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
