import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Api from '@/views/Api.vue';
import Error from '@/views/Error.vue';
import Login from '@/views/Login.vue';

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [  
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/:catchAll(.*)',
        name: 'Error',
        component: Error,
      }      ,
      {
        path: '/api',
        name: 'API',
        component: Api,
      },
      {
        path: '/log',
        name: 'Login',
        component: Login,
      }
    ]
  
  })

export default router;