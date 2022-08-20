import { createRouter, createWebHistory } from 'vue-router'
import LearningIcons from "../pages/LearningIcons.vue";
import App from "../App.vue";

const routes = [
    { path: '/', component: App },
    { path: '/learning-icons', component: LearningIcons }
   /* {
        path: '/dashboard',
        component: DashboardPage,
        children:[
            {
                path: '/dashboard/summary',
                component: Summary
            }
        ]
    },
    { path: '/plugins', component: Plugins },
    { path: '/settings', component: Settings },*/
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;