import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { useAuthStore } from './store/authStore'
import { supabase } from './supabase'
import('preline')

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.provide('supabase', supabase)

supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore();
  if (event === 'SIGNED_IN') {
    authStore.setUser(session.user);
    if (router.currentRoute.value.path === '/login') {
      router.push('/Dashboard');
    }
  } else if (event !== 'INITIAL_SESSION') {
    authStore.setUser(null);
  }
});
app.mount('#app')