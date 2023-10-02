<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-white bg-gray-800">
    <div>
    <p v-if="isLoggedIn">User is logged in</p>
    <p v-else>User is not logged in</p>
  </div>
    <div>
    <SocialAuth
    :providers="['twitch', 'github', 'google']"
    socialLayout="col"
    :appearance="appearance"
    @signInWithOAuth="provider => supabase.auth.signInWithOAuth(provider)"
    />
    </div>
  </div>
</template>


<script setup>
import { computed, inject } from 'vue'
import { useAuthStore } from '../store/authStore'
import { SocialAuth, Auth, ThemeBold, css } from 'vue-auth-ui'

const appearance = {
  theme: ThemeBold,
  themeVariant: 'dark'
}

const supabase = inject('supabase')
const auth = useAuthStore()
const isLoggedIn = computed(() => auth.user !== null)

</script>
<style scoped>
/* Add your component-specific styles here */
</style>
