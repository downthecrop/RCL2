<template>
  <header class="sticky top-0 z-10 bg-gray-900 flex-shrink-0 border-b border-gray-700 transition-transform duration-500"
    :class="{ '-translate-y-full': scrollingDown, '-translate-y-0': scrollingUp }">
    <div class="flex items-center justify-between p-2">
      <div class="flex items-center space-x-3">
        <RouterLink to="/home" class="p-2 text-xl font-semibold tracking-wider text-white uppercase">
          RCL2
        </RouterLink>
      </div>
      <nav aria-label="Secondary" class="flex items-center space-x-3">
        <!-- Replaced IconButton with regular buttons -->
        <button @click="openSearchPanel" class="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
          <SearchIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </button>

        <button @click="openNotificationsPanel" class="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
          <BellIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </button>

        <button @click="openSettingsPanel" class="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
          <CogIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </button>

        <button :class="'bg-green-500 p-2 rounded-md text-white focus:outline-none focus:ring focus:ring-gray-500'"
          @click="addLink('https://downthecrop.xyz', false)">
          PushLink
        </button>

        <button @click="() => signInOrOut(isLoggedIn)"
          :class="(isLoggedIn ? 'bg-red-500' : 'bg-blue-500') + ' p-2 rounded-md text-white focus:outline-none focus:ring focus:ring-gray-500'">
          {{ isLoggedIn ? "Logout" : "Login" }}
        </button>
        <UserMenu />
      </nav>
    </div>
  </header>
</template>

<script setup>
// Script remains the same
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { ChevronDoubleRightIcon, SearchIcon, BellIcon, CogIcon } from '@heroicons/vue/outline';
import { computed } from 'vue'
import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../supabase';
import router from '../../router/index.js'

async function addLink(url, isPrivate) {
  const user = auth.user;
  url = genLink()
  if (user) {
    const { data, error } = await supabase
      .from('user_links')
      .insert([
        { user_id: user.id, link_url: url, link_name: url, is_private: isPrivate }
      ]);

    if (error) {
      console.error("Error inserting link:", error);
      return null;
    }

    return data;
  } else {
    console.error("User is not authenticated.");
    return null;
  }
}

const signInOrOut = (isLoggedIn) => {
  if (isLoggedIn) { signOut() } else { signIn() }
}

const genLink = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[randomIndex];
  }

  return `https://${randomString}.com`;
}

const auth = useAuthStore()
const isLoggedIn = computed(() => auth.user !== null)

async function signOut() {
  const auth = useAuthStore()
  await supabase.auth.signOut();
  auth.setUser(null)
}

function signIn() {
  router.push({ path: '/login', replace: true })
}

defineComponent({
  // Removed IconButton from components
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
