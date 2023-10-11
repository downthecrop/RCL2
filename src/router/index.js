import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/authStore';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Landing from '../components/GenericHome.vue';
import Public from '../components/Public.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
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
    path: '/Landing',
    name: 'Landing',
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
