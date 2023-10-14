<template>
  <div class="bg-gray-900">
    <Transition name="fade" mode="out-in">
      <div v-if="loading">
        <div class="loading-wrapper text-gray-300">
          <Loadingbar />
        </div>
      </div>
      <div v-else>
        <div
          class="flex pt-16 flex-col items-center justify-start min-h-screen p-4 space-y-4 antialiased text-gray-300 bg-gray-900">
          <div>
            <div class="flex items-center justify-center">
              <img :src="identicon" width="42" height="42" class="rounded-full">
            </div>
            <div class="flex items-center pt-4 justify-center">
              {{ username }}
            </div>

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
              Anon
            </div>
          </div>
          <div v-if="myToggle">
            <LinkEntry @addLink="addLink" />
          </div>
          <div class="responsive-table">
            <main class="p-5">
              <div class="min-h-full mt-6 overflow-hidden border border-gray-700 rounded-md mx-auto">
                <div class="overflow-x-auto"> <!-- Added this div -->
                  <table class="min-w-full divide-y divide-gray-700" v-if="links.length > 0">
                    <thead class="bg-gray-800">
                      <tr>
                        <th scope="col"
                          class="min-w-1/2 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                          Name
                        </th>
                        <th scope="col"
                          class="min-w-1/2 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                          Last Updated
                        </th>
                      </tr>
                    </thead>
                    <transition-group name="fade" tag="tbody" class="bg-gray-950 divide-y divide-gray-700">
                      <tr v-for="link in links" :key="link.id" class="transition-all hover:bg-gray-700">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10 center-dot">
                              <div class="dot bg-gray-700">
                                <img class=""
                                  :src="'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=' + link.link_url"
                                  alt="" />
                              </div>
                            </div>
                            <div class="ml-4 your-element-class">
                              <a :href="link.link_url">
                                <div class="text-sm font-medium text-gray-300 truncate">{{ link.link_url }}</div>
                              </a>
                              <div class="text-sm font-small text-gray-500 truncate">{{ link.link_name }}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-500">
                            {{ formatDate(link.created_at) }}</div>
                        </td>
                      </tr>
                    </transition-group>
                  </table>
                  <div class="flex flex-col items-center justify-center p-4 text-gray-300" v-else>
                    <font-awesome-icon icon="globe-asia" class="text-2xl"></font-awesome-icon>
                    <font-awesome-icon icon="times" class="absolute text-red-500"
                      style="font-size: 0.5em; top: 50%; left: 50%; transform: translate(-50%, -50%);"></font-awesome-icon>
                    <div class="mt-2 text-lg">There are no links to display</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Identicon from 'identicon.js';
import { useRoute } from 'vue-router'
import { useAuthStore } from '../store/authStore'
import LinkEntry from './elements/LinkEntry.vue';
import { supabase } from '../supabase'
import Loadingbar from './elements/Loadingbar.vue'
import seedrandom from 'seedrandom';

// Predefined array of good-looking colors
const goodColors = [
  [255, 87, 34, 255], // rgba orange
  [33, 150, 243, 255], // rgba blue
  [76, 175, 80, 255], // rgba green
  [244, 67, 54, 255]  // rgba red
];


const router = useRoute();
let links = ref([])
let loading = ref(true);

let tempTableStorage = null;
let username = ref("")
const auth = useAuthStore()
const uuid = ref(null)
let anonLinksCache = null;
let myToggle = ref(false);


const hash = String(router.params.id).padStart(15, '*');
const rng = seedrandom(hash);
const randomIndex = Math.floor(rng() * goodColors.length);
const selectedColor = goodColors[randomIndex];

const options = {
  foreground: selectedColor, // rgba black
  background: [255, 255, 255, 255], // rgba white
  margin: 0.1,  // 10% margin
  size: 420 // 420x420 pixels
};

const identicon = "data:image/png;base64," + new Identicon(hash, options).toString();

async function toggleTable() {
  myToggle.value = !myToggle.value;
  if (myToggle.value == false) {
    links.value = tempTableStorage;
  } else {
    tempTableStorage = links.value;
    if (anonLinksCache === null) {
      loading.value = true;
      anonLinksCache = await auth.fetchAnonLinks(uuid.value);
      loading.value = false;
    }
    links.value = anonLinksCache;
  }
}

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const month = d.toDateString().split(' ')[1];
  const day = d.getDate(), year = d.getFullYear();
  let hour = d.getHours(), min = d.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${month} ${day} ${year} - ${hour}:${min < 10 ? '0' + min : min} ${ampm}`;
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
  links.value = await auth.fetchAnonLinks(uuid.value);
  anonLinksCache = links.value;
}

onMounted(async () => {
  try {
    loading.value = true;  // Start loading
    uuid.value = await auth.getUUID(router.params.id);
    if (uuid.value) {
      links.value = await auth.fetchUserLinks(uuid.value);
      username = router.params.id
    } else {
      username = "Error User Not Found"
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    loading.value = false; // End loading
  }
})
</script>

<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* or any height you prefer */
}

/* Default style for larger screens */
.your-element-class {
    max-width: 380px; 
}

/* Media query for screens smaller than or equal to 768px */
@media (max-width: 768px) {
    .your-element-class {
        max-width: 120px; /* Adjust this value as needed for smaller screens */
    }
}

#avatar {
  width: 100px;
  height: 100px;
  position: relative;
}

.box {
  position: absolute;
  width: 25px;
  height: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Custom responsive styles */
@media screen and (max-width: 1024px) {

  .responsive-table table,
  .responsive-table thead,
  .responsive-table tbody,
  .responsive-table th,
  .responsive-table td,
  .responsive-table tr {
    @apply block;
  }

  .responsive-table thead tr {
    @apply hidden;
  }

  .responsive-table tr {
    @apply mb-0.5;
  }

  .responsive-table td {
    @apply py-2;
  }

  .responsive-table td::before {
    @apply block;
    @apply text-xs font-bold uppercase;
    @apply mb-1;
    content: attr(data-label);
  }

  .responsive-table td:first-child::before {
    @apply mt-2;
  }
}
</style>