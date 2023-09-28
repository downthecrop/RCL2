import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import 'font-awesome/css/font-awesome.css'
import { useAuthStore } from './store/authStore'
import { createClient } from '@supabase/supabase-js'
import { supabase } from './supabase'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')


// Initialize your auth store
const auth = useAuthStore()

// Listen to Supabase auth changes
supabase.auth.onAuthStateChange((event, session) => {
  auth.setUser(session?.user ?? null)
})
