import { createRouter, createWebHistory } from "vue-router";
import StartPage from '@/components/StartPage.vue';

import Question from '@/components/Question.vue';
import GameOver from '@/components/GameOver.vue';
import Results from '@/components/Results.vue';

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/question',
        component: Question
    },
    {
        path: '/results',
        component: Results
    },
    {
        path: '/game-over',
        component: GameOver
    }
];

const router = createRouter({
    routes,
    history: createWebHistory('/quiz/'),
});

export default router;