<template>
  <div class="flex flex-col items-center justify-start min-h-screen p-4 space-y-4 antialiased text-gray-300 bg-gray-900">
    <div>
      {{ status }}
    </div>
    <div class="relative w-48 h-8 rounded-full bg-gray-900 border-2 border-gray-700">
      <div :class="myToggle ? 'translate-x-full' : 'translate-x-0'"
        class="absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full transition-transform duration-300 ease-in-out shadow-md">
      </div>
      <div @click="toggleTable"
        class="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center cursor-pointer text-gray-300">
        Verified
      </div>
      <div @click="toggleTable"
        class="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center cursor-pointer text-gray-300">
        Anonymous
      </div>
    </div>
    <div v-if="myToggle">
      <LinkEntry @addLink="addLink" />
    </div>
    <main class="p-5">
      <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-700 rounded-md">
        <table class="w-full divide-y divide-gray-700">
          <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-800 divide-y divide-gray-700">
            <tr v-for="link in links" :key="link.id" class="transition-all hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-10 h-10 rounded-full" src="https://downthecrop.github.io/downthecrop.png" alt="" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-300">{{ link.link_url }}</div>
                    <div class="text-sm text-gray-300">{{ link.link_name }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-300">
                  Oct 4 2023 - 9:42 PM</div>
                <div class="text-sm text-gray-300">
                  Oct 4 2023 - 9:42 PM</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
  <SearchPanel />
  <SettingsPanel />
  <NotificationsPanel />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../store/authStore'
import LinkEntry from './elements/LinkEntry.vue';
import { supabase } from '../supabase'


const router = useRoute();
let links = ref([])

let tempTableStorage = null;
let status = ref("")
const auth = useAuthStore()
const uuid = ref(null)
let anonLinksCache = null;
let myToggle = ref(false);

async function toggleTable() {
  myToggle.value = !myToggle.value;
  if (myToggle.value == false) {
    links.value = tempTableStorage;
  } else {
    tempTableStorage = links.value;
    if (anonLinksCache === null) {
      anonLinksCache = await auth.fetchAnonLinks(uuid.value);
    }
    links.value = anonLinksCache;
  }
}

async function addLink(link, description) {
  if (uuid.value == null) return;
  let tmp = {
    "user_id": uuid.value,
    "link_url": link,
    "link_name": description,
  }
  const { error } = await supabase.from('anon_links').insert([tmp])
  if (error) {
    console.error('Error updating link:', error);
    return;
  }
  links.value = await auth.fetchUserLinks(auth.user.id);
}

onMounted(async () => {
  try {
    uuid.value = await auth.getUUID(router.params.id);
    if (uuid.value) {
      links.value = await auth.fetchUserLinks(uuid.value);
      status = router.params.id
    } else {
      status = "Error User Not Found"
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
})
</script>

<style scoped>/* Add your component-specific styles here */</style>
