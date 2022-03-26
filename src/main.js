import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './assets/styles/index.scss'

// const app = createApp(App);

export const createApp = ViteSSG(
    App,
    { routes },
)