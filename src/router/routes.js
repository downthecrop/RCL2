import authRoutes from './auth'
import AppLayout from '../components/layouts/AppLayout.vue'
import PublicLayout from '../components/layouts/PublicLayout.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: AppLayout,
    meta: { layout: AppLayout },
  },
  {
    path: '/Public/',
    name: 'Public',
    component: PublicLayout,
    meta: { layout: PublicLayout },
  },
  ...authRoutes,
]
