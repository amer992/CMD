import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
  routes: [
  
    {
      path: '/test',
      name: 'test',
      component: ()=> import('../views/testView.vue')
    },
      {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/LoginView.vue')
    },
    {
      path: '/admin/',
      name: 'AdminHome',
      component: ()=> import('../components/Home.vue'),
      //props:{ menu:[{"title":"Dashboard","destination":"/admin"},{"title":"Departments","destination":"/admin/department"},{"title":"Managers","destination":"/admin/managers"},{"title":"Requests","destination":"/admin/requests"},{"title":"Send Message","destination":"/admin/send-message"}]},
      children:[
        {
          path: '/admin/department',
          name: 'Department',
          component: ()=> import('../views/Admin/Departments.vue')
        },
        {
          path: '/admin/',
          name: 'Dashboard',
          component: ()=> import('../views/Admin/Dashboard.vue')
        },
        {
          path: '/admin/requests',
          name: 'ManagerRequests',
          component: ()=> import('../views/Admin/ManagerRequests.vue')
        },
        {
          path: '/admin/managers',
          name: 'Managers',
          component: ()=> import('../views/Admin/Managers.vue')
        },
        {
          path: '/admin/send-message',
          name: 'SendMessage',
          component: ()=> import('../components/SendMessage.vue')
        },
        {
          path: '/admin/profile',
          name: 'Profile',
          component: ()=> import('../components/Profile.vue'),
          props: true,
          meta:{requiresAuth: true,}

        }
      ]
    },
   
 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
