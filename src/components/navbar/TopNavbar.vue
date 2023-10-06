<template>
  <header class="sticky top-0 z-10 bg-gray-900 flex-shrink-0 border-b border-gray-700 transition-transform duration-500">
    <div class="flex justify-center">
      <div class="flex items-center justify-between max-w-screen-lg w-full">
        <div class="flex items-center space-x-3">
          <RouterLink to="/home" class="p-2 text-xl font-semibold tracking-wider text-white uppercase">
            RCL2
          </RouterLink>
        </div>
        <div class="flex-grow flex items-center justify-center">
          <div class="p-2 text-xl font-semibold tracking-wider text-white uppercase">
            <slot></slot>
          </div>
        </div>
        <nav aria-label="Secondary" class="flex items-center space-x-3 flex-wrap">
          <button @click="() => router.push('/u/downthecrop')"
            class="py-1 px-3 rounded-md text-white text-sm focus:outline-none focus:ring focus:ring-gray-500">
            <font-awesome-icon icon="user"></font-awesome-icon>
          </button>
          <!-- Updated styles for PushLink button -->
          <button class="bg-green-500 py-1 px-3 rounded-md text-white text-sm focus:outline-none focus:ring focus:ring-gray-500"
            @click="$emit('openModal')">
            <font-awesome-icon icon="cog"></font-awesome-icon> 
          </button>
          <!-- Updated styles for Login/Logout button -->
          <button @click="() => signInOrOut(isLoggedIn)"
            :class="(isLoggedIn ? 'bg-red-500' : 'bg-blue-500') + ' py-1 px-3 rounded-md text-white text-sm focus:outline-none focus:ring focus:ring-gray-500'">
            <font-awesome-icon :icon="isLoggedIn ? 'sign-out-alt' : 'sign-in-alt'"></font-awesome-icon>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>



<script setup>
// Script remains the same
import { RouterLink } from 'vue-router';
import { computed } from 'vue'
import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../supabase';
import router from '../../router/index.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faSignOutAlt, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCog, faSignOutAlt, faSignInAlt, faUser);

const signInOrOut = (isLoggedIn) => {
  if (isLoggedIn) { signOut() } else { signIn() }
}
const auth = useAuthStore()
const isLoggedIn = computed(() => auth.user !== null)

async function signOut() {
  const auth = useAuthStore()
  await supabase.auth.signOut();
  auth.setUser(null)
  router.push({ path: '/login', replace: true })
}

function signIn() {
  router.push({ path: '/login', replace: true })
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
