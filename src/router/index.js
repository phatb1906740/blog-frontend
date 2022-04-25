import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import store from '../store';

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
        beforeEnter: (to, from, next) => {
            if(store.state.isLogin) {
                next();
            } else {
                next({ path: '/login', query: { redirect: `${to.name}` } });
            }
        }
    },
    {
        path: '/create',
        name: 'create-page',
        component: () => import("../pages/CreatePage.vue"),
        beforeEnter: (to, from, next) => {
            if(store.state.isLogin) {
                next();
            } else {
                next({ path: '/login', query: { redirect: `${to.name}` } });
            }
        }
    },
    {
        path: '/update/:id',
        name: 'update-page',
        component: () => import("../pages/UpdatePage.vue"),
        props: true,
    },
    {
        path: '/login',
        name: 'login-page',
        component: () => import("../pages/LoginPage.vue"),
    },
    {
        path: '/signin',
        name: 'signin-page',
        component: () => import("../pages/SigninPage.vue"),
    },
    {
        path: '/blog-detail/:id',
        name: 'blog-detail',
        component: () => import("../pages/BlogDetail.vue"),
        props: true,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import("../pages/PageNotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;