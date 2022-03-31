import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import './assets/styles/index.scss'
import 'aos/dist/aos.css';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
    App,
    { routes },
    ({ router }) => {
        router.beforeEach((to, from, next) => {
            if (to.name !== from.name) {
                window.scrollTo(0, 0)
            } else if (to.name === from.name && to.hash) {
                const element = document.getElementById(to.hash.replace('#', ''));
                element.scrollIntoView({ behavior: "smooth" });
            }
            next();
        })
    },
)