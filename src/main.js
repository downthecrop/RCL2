import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import { createPinia } from 'pinia'
import { createClient } from '@supabase/supabase-js'
import 'font-awesome/css/font-awesome.css'
import { useAuthStore } from './store/authStore'
import { supabase } from './supabase'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.provide('supabase', supabase)

supabase.auth.onAuthStateChange((event, session) => {
  const authStore = useAuthStore();
  if (event === 'SIGNED_IN') {
    authStore.setUser(session.user);
  } else if (event !== 'INITIAL_SESSION') {
    authStore.setUser(null);
  }
});

app.mount('#app')