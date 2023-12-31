import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/home-page/HomePage.vue')
        },
        {
            path: `/news/:id`,
            component: () => import('@/components/OneNews.vue')
        },
       ]
});
