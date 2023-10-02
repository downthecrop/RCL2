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
    name: 'SignIn',
    component: Login
  },
  {
    path: '/public/:id',
    name: 'Public',
    component: Public
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.getUser();
  const requiresAuth = to.matched.some
  (record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('sign-in');
  //else if(!requiresAuth && currentUser) next("/");
  else next();
})

export default router