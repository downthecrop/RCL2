<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-white bg-gray-800">
    <div class="w-full max-w-md">
      <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <img src="rcl.svg" width="50">
      </div>
      <br>
      <Auth :supabaseClient="supabase" :providers="['twitch', 'github', 'google']" :appearance="appearance"
        onlyThirdPartyProviders />
    </div>
  </div>
</template>


<script setup>
import { inject } from 'vue'
const supabase = inject('supabase')
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'
import { useAuthStore } from '../store/authStore'
import router from '../router/index'

const authStore = useAuthStore();
if (() => authStore.user != null) {
  // We're already logged in, redirecting...
  router.push('/dashboard')
}
const appearance = {
  theme: ThemeSupa,
}

</script>
<style scoped></style>