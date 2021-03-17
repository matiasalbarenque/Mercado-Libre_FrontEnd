import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import(/* webpackChunkName: "[request]" */ './custom/pages/home.vue'),
    },
    {
        name: 'items',
        path: '/items',
        component: () => import(/* webpackChunkName: "[request]" */ './custom/pages/items.vue'),
    },
    {
        name: 'item',
        path: '/items/:id',
        component: () => import(/* webpackChunkName: "[request]" */ './custom/pages/item.vue'),
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
