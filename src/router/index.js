import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
    // {
    //     path: 'tailwind',
    //     name: 'Tailwind',
    //     component: Tailwind,
    // },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;