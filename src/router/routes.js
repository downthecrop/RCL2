import Home from '../views/Home'
import Public from '../views/Public'
import authRoutes from './auth'
import AppLayout from '../components/layouts/AppLayout'
import PublicLayout from '../components/layouts/PublicLayout'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: AppLayout },
  },
  {
    path: '/Public/',
    name: 'Public',
    component: Public,
    meta: { layout: PublicLayout },
  },
  ...authRoutes,
]
