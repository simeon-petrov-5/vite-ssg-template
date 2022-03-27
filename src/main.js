import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
// import { routes } from './router'
// import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import './assets/styles/index.scss'

const routes = setupLayouts(generatedRoutes)
// const app = createApp(App);

export const createApp = ViteSSG(
    App,
    { routes },
)