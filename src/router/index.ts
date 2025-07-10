import { createRouter, createWebHistory } from 'vue-router';
import AccountManagement from '../components/AccountManagement.vue';

const routes = [
    {
        path: '/',
        name: 'AccountManagement',
        component: AccountManagement,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;