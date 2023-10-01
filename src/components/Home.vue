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
                      Private
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-800 divide-y divide-gray-700">
                  <tr v-for="link in links" :key="link.id" class="transition-all hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-10 h-10 rounded-full" src='https://downthecrop.github.io/downthecrop.png'
                            alt="" />
                        </div>
                        <div v-if="editingLink !== link.id" class="ml-4">
                          <div class="text-sm font-medium text-gray-300">{{ link.link_url }}</div>
                        </div>
                        <div v-else class="ml-4">
                          <input v-model="link.link_url" type="text" class="text-sm font-medium text-gray-300">
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div v-if="editingLink !== link.id" class="text-sm text-gray-300">
                        {{ link.link_name }}
                      </div>
                      <div v-else>
                        <input v-model="link.link_name" type="text" class="text-sm text-gray-300">
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-300">
                        {{ formatDate(link.updated_at) }}
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <input v-if="editingLink === link.id" type="checkbox" v-model="link.is_private">
                      <span v-else>{{ link.is_private ? 'Yes' : 'No' }}</span>
                    </td>
                    <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <a v-if="editingLink !== link.id" href="#" class="text-indigo-400 hover:text-indigo-500" @click="showEditForm(link.id)">
                        Edit
                      </a>
                      <div v-else>
                        <button @click="updateLink(link)">Confirm</button>
                        <button @click="cancelEdit">Cancel</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
    <SearchPanel />
    <SettingsPanel />
    <NotificationsPanel />
  </div>
</template>
<script setup>
import { defineComponent, onMounted } from 'vue'
import Sidebar from './navbar/VerticalNavbar.vue'
import Navbar from './navbar/TopNavbar.vue'
import LinkInput from './elements/LinkInput.vue'
import { computed, ref, reactive } from 'vue'
import { useAuthStore } from '../store/authStore'
import { supabase } from '../supabase'

const authStore = useAuthStore();
const isLoggedIn = computed(() => authStore.user != null);
const links = ref([]);
const editingLink = ref(null);

function formatDate(timestamp) {
  const dateObject = new Date(timestamp);
  const month = dateObject.toDateString().split(' ')[1];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  let hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  return `${month} ${day} ${year} - ${hours}:${minutesStr} ${ampm}`;
}


function showEditForm(linkId) {
  editingLink.value = linkId;
}

function cancelEdit() {
  editingLink.value = null;
}

async function updateLink(link) {

  // Generate current time in required format
  const now = new Date().toISOString();
  const formattedNow = now.slice(0, 23) + "+00";

  link.updated_at = formattedNow;

  const { data, error } = await supabase
    .from('user_links')
    .update([link])
    .eq('id', link.id);

  if (error) {
    console.error('Error updating link:', error);
    return;
  }
  fetchUserLinks();
  cancelEdit();
}


async function fetchUserLinks() {
  const user = authStore.user;
  if (!user) return null;
  const { data, error } = await supabase
    .from('user_links')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error("Error fetching links:", error);
    return null;
  }
  links.value = data;
}

onMounted(fetchUserLinks)

defineComponent({
  components: {
    Sidebar,
    Navbar,
    LinkInput
  }
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
