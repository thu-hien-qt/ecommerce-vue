import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import SidebarProducts from '@/components/SidebarProducts.vue';

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: HomePage 
    },

    { 
        path: '/cart/:id',
        name: 'cart', 
        component: ()=>import('@/components/ShoppingCart.vue'),
        props: true
    },

    { 
        path: '/sidebar_products', 
        name: 'sidebar', 
        component: SidebarProducts
    },

    { path: '/:catchAll(.*)', redirect: '/' } // Redirect all unknown paths to ProductList
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router