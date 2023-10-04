<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-white bg-gray-800">
    <div class="w-full max-w-md">
      <Auth :supabaseClient="supabase" :providers="['twitch', 'github', 'google']" socialLayout="col"
        :appearance="appearance" onlyThirdPartyProviders />
    </div>
  </div>
</template>


<script setup>
import { inject } from 'vue'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@nuxtbase/auth-ui-vue'

const appearance = {
  theme: ThemeSupa,
}

const supabase = inject('supabase')

</script>
<style scoped></style>
