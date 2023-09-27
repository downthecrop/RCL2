
import RegisterLayout from '../components/layouts/RegisterLayout.vue'
import LoginLayout from '../components/layouts/LoginLayout.vue'

export default [
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
