import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./custom/pages/home.vue'),
    },
    {
        name: 'items',
        path: '/items',
        component: () => import('./custom/pages/items.vue'),
    },
    {
        name: 'item',
        path: '/items/:id',
        component: () => import('./custom/pages/item.vue'),
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;
