import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Notfound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:PathMatch(.*)',
            name: 'NotFound',
            component: Notfound
        }
    ]
})

export default router