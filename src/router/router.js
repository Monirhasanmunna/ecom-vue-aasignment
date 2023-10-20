import { createRouter, createWebHistory } from "vue-router";


const Home = ()=> import('../components/Home.vue')
const Products = ()=>import('../components/Products.vue')
const WishList = ()=>import('../components/WishList.vue')
const Login = ()=>import('../components/Login.vue')
const Register = ()=>import('../components/Register.vue')


const routes = [
    {
        path : '/register',
        name : 'register',
        component : Register,
    },
    {
        path : '/login',
        name : 'login',
        component : Login,
    },
    {
        path : '/',
        name : 'home',
        component : Home,
        
    },
    {
        path : '/products',
        name : 'products',
        component : Products,
        meta : {
            isProtected : true
        },
    },
    {
        path : '/wishlist',
        name : 'wishlist',
        component : WishList,
    },

]

const router = createRouter({
    history : createWebHistory(),
    routes
});

// router.beforeEach((to, from, next)=>{
//     if(!auth.authUser?.token && to.meta.isProtected == true){
//         next('/login');
//     }else{
//         //if logedin not access to login page
//         if(auth.authUser?.token && to.fullPath == '/login'){
//             next('/')
//         }else{
//             next()
//         }
//     }
// });

export default router