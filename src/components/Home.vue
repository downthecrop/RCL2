<template>
  <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-300 bg-gray-900">
    <Sidebar />
    <div class="flex max-w-full flex-col flex-1">
      <Navbar />
      <div class="flex-1">
        <div>
          <LinkInput />
          <Setusername />
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
                      <a v-if="editingLink !== link.id" href="#" class="text-indigo-400 hover:text-indigo-500"
                        @click="showEditForm(link.id)">
                        Edit
                      </a>
                      <div v-else>
                        <button @click="deleteLink(link)"
                          class="text-red-400 hover:text-red-500">
                          Delete
                        </button>
                        <button @click="updateLink(link)">Confirm</button>
                        <button @click="hideEditForm">Cancel</button>
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
import Setusername from './elements/SetUsername.vue'
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { supabase } from '../supabase'

const auth = useAuthStore();
const editingLink = ref(null);
const links = ref([]);

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const month = d.toDateString().split(' ')[1];
  const day = d.getDate(), year = d.getFullYear();
  let hour = d.getHours(), min = d.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${month} ${day} ${year} - ${hour}:${min < 10 ? '0' + min : min} ${ampm}`;
}

async function deleteLink(link) {
  const { error } = await supabase.from('user_links').delete().eq('id', link.id);
  error ? console.error('Error deleting link:', error) : auth.fetchUserLinks(auth.user.id);
}

function showEditForm(linkId) {
  editingLink.value = linkId;
}

function hideEditForm() {
  editingLink.value = null;
}

async function updateLink(link) {
  link.updated_at = new Date().toISOString().slice(0, 23) + "+00"; // New Timestamp
  const { error } = await supabase.from('user_links').update([link]).eq('id', link.id);
  if (error) {
    console.error('Error updating link:', error);
    return;
  }
  links.value = await auth.fetchUserLinks(auth.user.id);
  hideEditForm();
}

onMounted(async () => {
  try {
    if (auth.user) {
      links.value = await auth.fetchUserLinks(auth.user.id);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
})

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
