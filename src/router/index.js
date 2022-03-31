import Home from '@/views/home/Home.vue';
import Template from '@/views/blog/BlogTemplate.vue';
import EmailSuccess from '@/views/EmailSuccess.vue';
import NotFound from '@/views/NotFound.vue';

import fs from 'fs'
const files = fs.readdirSync('../articles');

console.log('FILES', files)


export const routes = [
    { path: '/', component: Home },
    { path: '/submission-success', component: EmailSuccess },
    { path: '/blog', name: 'Template', component: Template },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]