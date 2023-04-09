import { createRouter, createWebHistory } from "vue-router";
import StartPage from '@/components/StartPage.vue';

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/question-1',
        component: StartPage
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;