// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { host } from '@/components/global'
import axios from 'axios'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'share',
        name: 'Share',
        component: () => import('@/views/Share.vue'),
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/Upload.vue'),
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path == '/' && from.path != '/login') {
    const token = localStorage.getItem('token');
    axios.get(host + 'check_token_exp_time/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(function () {
        next();
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          next({ path: '/login' })
        }
      })
  } else next()
})


export default router
