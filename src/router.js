import { createRouter, createWebHistory } from 'vue-router'

import LearningIcons from "@/pages/LearningIcons";
import FeedbackPage from "@/pages/Feedback";
import InformPage from "@/pages/InformPage";
import Main from "@/pages/Main";
import Questionnaire from "@/pages/Questionnaire";
import Project from "@/pages/Project";
import LicenseIcons from "@/pages/LicenseIcons";

const routes = [
    {
        path: '/learningIcon',
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
    {
        path: '/project',
        name: 'project',
        component: Project,
    },
    {
        path: '/licenseicons/:icons*',
        name: 'licenseIcons',
        component: LicenseIcons,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;