import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/authStore';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Landing from '../components/Landing.vue';
import Public from '../components/Public.vue';
import { supabase } from '../supabase'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      redirectIfLoggedIn: true,
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Landing,
    meta: {
      redirectIfLoggedIn: true,
    }
  },
  {
    path: '/u/:id',
    name: 'Public',
    component: Public,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore();
  if (event === 'SIGNED_IN') {
    authStore.setUser(session.user);
    if(router.currentRoute.value.meta.redirectIfLoggedIn) {
      router.push('/dashboard');
    }
  } else if (event !== 'INITIAL_SESSION') {
    authStore.setUser(null);
  }
});

router.beforeEach(async (to, from, next) => {
  document.title = 'RCL2 - ' + to.name;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const redirectIfLoggedIn = to.matched.some((record) => record.meta.redirectIfLoggedIn);
  const auth = useAuthStore();
  const currentUser = auth.user;

  if (currentUser && redirectIfLoggedIn) {
    next('/dashboard');
    return;
  } else if (requiresAuth && !currentUser) {
    next('/login');
    return;
  } else if (requiresAuth && currentUser) {
    next();
    return;
  }
  next();
});

export default router;
