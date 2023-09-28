import AppLayout from '../components/layouts/AppLayout.vue'
import PublicLayout from '../components/layouts/PublicLayout.vue'
import RegisterLayout from '../components/layouts/RegisterLayout.vue'
import LoginLayout from '../components/layouts/LoginLayout.vue'

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
  {
    path: '/auth/register',
    name: 'Register',
    component: RegisterLayout,
    meta: { layout: RegisterLayout },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginLayout,
    meta: { layout: LoginLayout },
  },
]
