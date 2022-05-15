import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListForm.vue';
import Home from './components/HomeMain.vue';
import Detail from './components/DetailPage.vue';

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 