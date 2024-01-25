import { createRouter, createWebHistory } from "vue-router";
import StartPage from '@/components/StartPage.vue';

import Question1 from '@/components/Question-1.vue';
import Question2 from '@/components/Question-2.vue';
import Question3 from '@/components/Question-3.vue';
import Question4 from '@/components/Question-4.vue';
import Question5 from '@/components/Question-5.vue';
import Question6 from '@/components/Question-6.vue';
import Question7 from '@/components/Question-7.vue';
import Question8 from '@/components/Question-8.vue';
import Question9 from '@/components/Question-9.vue';
import Question10 from '@/components/Question-10.vue';
import Question11 from '@/components/Question-11.vue';
import Question12 from '@/components/Question-12.vue';
import Question13 from '@/components/Question-13.vue';
import Question14 from '@/components/Question-14.vue';
import Question15 from '@/components/Question-15.vue';

import GameOver from '@/components/GameOver.vue';
import Results from '@/components/Results.vue';
import NotFairGame from '@/components/NotFairGame.vue';

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/question-1',
        component: Question1
    },
    {
        path: '/question-2',
        component: Question2
    },
    {
        path: '/question-3',
        component: Question3
    },
    {
        path: '/question-4',
        component: Question4
    },
    {
        path: '/question-5',
        component: Question5
    },
    {
        path: '/question-6',
        component: Question6
    },
    {
        path: '/question-7',
        component: Question7
    },
    {
        path: '/question-8',
        component: Question8
    },
    {
        path: '/question-9',
        component: Question9
    },
    {
        path: '/question-10',
        component: Question10
    },
    {
        path: '/question-11',
        component: Question11
    },
    {
        path: '/question-12',
        component: Question12
    },
    {
        path: '/question-13',
        component: Question13
    },
    {
        path: '/question-14',
        component: Question14
    },
    {
        path: '/question-15',
        component: Question15
    },
    {
        path: '/results',
        component: Results
    },
    {
        path: '/game-over',
        component: GameOver
    },
    {
        path: '/not-fair-game',
        component: NotFairGame
    },
];

const router = createRouter({
    routes,
    history: createWebHistory('/quiz/'),
});

export default router;