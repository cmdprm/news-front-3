import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import MemberView from '@/views/MemberView'
import AboutView from '@/views/AboutView'
import WritingView from '@/views/WritingView'
import ArticleDetailView from '@/views/ArticleDetailView'
import NotFoundView from '@/views/NotFoundView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/membership',
        name: 'membership',
        component: MemberView
    },
    {
        path: '/our-story',
        name: 'our-story',
        component: AboutView
    },
    {
        path: '/writing',
        name: 'writing',
        component: WritingView
    },
    {
        path: '/:slug',
        name: 'articleDetail',
        component: ArticleDetailView,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
