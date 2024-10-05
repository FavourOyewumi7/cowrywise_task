import { createRouter, createWebHistory } from 'vue-router'


const routes = [
            {
                name:'',
                path:'/',
                component:()=>import('./pages/LandingPage.vue')
            },
            {
                name:'search',
                path:'/search',
                component:()=>import('./pages/SearchPage.vue')
            },
                       
        ]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router