import Home from "@/components/Home";
import Register from "@/components/Register";
import {createRouter,createWebHistory} from 'vue-router'
import Login from "@/components/Login";

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name: 'Register',
        component: Register,
        path: '/register'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router