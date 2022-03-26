import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/home/Home.vue';
import EmailSuccess from '@/views/EmailSuccess.vue';
import NotFound from '@/views/NotFound.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/submission-success', component: EmailSuccess },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router