<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-white bg-gray-800">
    <div class="w-full max-w-md">
      <Auth :supabaseClient="supabase" :providers="['twitch', 'github', 'google']"
        :appearance="appearance" onlyThirdPartyProviders theme="dark"/>
    </div>
  </div>
</template>


<script setup>
import { inject } from 'vue'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'
import { useAuthStore } from '../store/authStore'
import router from '../router/index'

const authStore = useAuthStore();
if(() => authStore.user != null){
  // We're already logged in, redirecting...
  router.push('/')
}

const appearance = {
  theme: ThemeSupa,
}

const supabase = inject('supabase')

</script>
<style scoped></style>