import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/view/Home.vue'
import Tailwind from '@/view/Tailwind.vue'
import Firebase from '@/view/Firebase.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/tailwind',
        name: 'Tailwind',
        component: Tailwind,
    },
    {
        path: '/firebase',
        name: 'Firebase',
        component: Firebase,
    },

];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;