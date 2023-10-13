import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/authStore';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Landing from '../components/Landing.vue';
import Public from '../components/Public.vue';

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
  },
  {
    path: '/',
    name: 'Home',
    component: Landing,
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

router.beforeEach(async (to, from, next) => {
  document.title = 'RCL2 - ' + to.name;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const auth = useAuthStore();
  const currentUser = auth.user;

  if (requiresAuth && !currentUser) {
    next('/login');
    return;
  }

  if (requiresAuth && currentUser) {
    next();
    return;
  }

  next();
});

export default router;
