import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/main.css'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { supabase } from './supabase'
import('preline')

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.provide('supabase', supabase)
app.mount('#app')