<template>
  <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-300 bg-gray-900">
    <Sidebar />
    <div class="flex max-w-full flex-col flex-1">
      <Navbar />
      <div class="flex-1">
        <div>
          <div>
            <p v-if="isLoggedIn">User is logged in as {{ authStore.user.id }}</p>
            <p v-else>User is not logged in</p>
          </div>
          <LinkInput v-if="isLoggedIn" />
          <main class="p-5">
            <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-700 rounded-md">
              <table class="w-full divide-y divide-gray-700">
                <thead class="bg-gray-800">
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      URL
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Link Title
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Created
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-800 divide-y divide-gray-700">
                  <tr v-for="link in links" class="transition-all hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-10 h-10 rounded-full" src='https://downthecrop.github.io/downthecrop.png' alt="" />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-300">{{ link.link_url }}</div>
                          <div class="text-sm text-gray-500">{{ link.link_name }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-300">{{ link.link_name }}</div>
                      <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="text-sm text-gray-300">
                        {{ link.created }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <a href="#" class="text-indigo-400 hover:text-indigo-500">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
    <SearchPanel />
    <SettingsPanel />
    <NotificationsPanel />
  </div>
</template>

<script setup>
// No changes in the script
import { defineComponent, onMounted, onUnmounted } from 'vue'
import Sidebar from './navbar/VerticalNavbar.vue'
import Navbar from './navbar/TopNavbar.vue'
import { computed, ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { supabase } from '../supabase'
import LinkInput from './elements/LinkInput.vue'

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const isLoggedIn = computed(() => authStore.user != null);

const links = ref([]) // Step 1: Define a ref to hold your links

async function fetchUserLinks() {
  const user = authStore.user;

  console.log("User ID:", user?.id); // Log the user ID

  if (user) {
    const { data, error } = await supabase
      .from('user_links')
      .select('*')
      .eq('user_id', user.id);

    console.log("Data:", data); // Log the fetched data
    console.log("Error:", error); // Log the error if there is one

    if (error) {
      console.error("Error fetching links:", error);
      return null;
    }

    links.value = data;
  } else {
    console.error("User is not authenticated.");
    return null;
  }
}

// Fetch the links when the component is mounted
onMounted(fetchUserLinks)

defineComponent({
  components: {
    Sidebar,
    Navbar,
    LinkInput
  },
  setup() {
    return {
      links
    }
  }
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
