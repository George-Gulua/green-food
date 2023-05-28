import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/pages/MainPage'
import AboutPage from '@/pages/AboutPage'
import ContactsPage from '@/pages/ContactsPage'
import MenuPage from '@/pages/MenuPage'
import LoginPage from '@/pages/LoginPage'
import RegistrationPage from "@/pages/RegistrationPage";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage
    },
    {
        path: '/menu',
        name: 'menu',
        component: MenuPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
