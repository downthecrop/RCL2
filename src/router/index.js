import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/authStore'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Landing from '../components/GenericHome.vue'
import Public from '../components/Public.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/u/:id',
    name: 'Public',
    component: Public
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(!requiresAuth) 
    next();
  const auth = useAuthStore()
  const currentUser = auth.user;
  if (!currentUser) next('/login');
  else next();
});


export default router