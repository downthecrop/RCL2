import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../supabase';
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
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
  if(!requiresAuth) next();
  const currentUser = (await supabase.auth.getUser()).data.user;
  if (!currentUser) next('/login');
  else if (!requiresAuth && currentUser && to.path === '/login') next('/');
  else next();
});

export default router