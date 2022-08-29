import { createRouter, createWebHistory } from 'vue-router'

import LearningIcons from "@/pages/LearningIcons";
import FeedbackPage from "@/pages/Feedback";
import InformPage from "@/pages/InformPage";
import Main from "@/pages/Main";
import Questionnaire from "@/pages/Questionnaire";

const routes = [
    {
        path: '/learningIcons',
        name:'learning Icons',
        component: LearningIcons },
    {
        path: '/feedback',
        name:'feedback',
        component: FeedbackPage },
    {
        path: '/informYourStudents',
        name: 'inform your students',
        component: InformPage,
    },
    {
        path: '/',
        name: 'home',
        component: Main,
    },
    {
        path: '/questionnaire',
        name: 'questionnaire',
        component: Questionnaire,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;