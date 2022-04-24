import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutUs from '../pages/AboutUs.vue';
import Contact from '../pages/Contact.vue';
import BlogDetail from '../pages/BlogDetail.vue';

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage,
    },
    {
        path: '/edit',
        name: 'edit-page',
        component: () => import("../pages/EditPage.vue"),
    },
    {
        path: '/create',
        name: 'create-page',
        component: () => import("../pages/CreatePage.vue"),
    },
    {
        path: '/update/:id',
        name: 'update-page',
        component: () => import("../pages/UpdatePage.vue"),
        props: true,
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/blog-detail/:id',
        name: 'blog-detail',
        component: BlogDetail,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;