<template>
  <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-300 bg-gray-900">
    <SlideRightModal :show="showModal" @close="showModal = false">
      <div class="wrapper flex mt-4">
        <div class="inputfield">
          <input v-model="username" placeholder="What's my new name?!"
            class="p-2 w-full bg-gray-800 text-white rounded" />
        </div>
        <div class="ml-4">
          <button @click="() => setUsername(username)"
            class="px-4 py-2 bg-blue-500 text-white rounded">Setusername</button>
        </div>
      </div>
    </SlideRightModal>
    <div class="flex max-w-full flex-col flex-1">
      <Navbar @openModal="showModal = !showModal">
        <LinkEntry @addLink="addLink" />
      </Navbar>
      <div class="flex-1">
        <div>
          <Transition name="fade" mode="out-in">
            <div v-if="loading">
              <div class="loading-wrapper">
                <Loadingbar />
              </div>
            </div>
            <div v-else>
              <div class="flex justify-center items-center mt-8">
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
              </div>
              <TableElement :links="links" @deleteLink="deleteLink" @updateLink="updateLink" ref="tableElementRef" />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './navbar/TopNavbar.vue'
import Loadingbar from './elements/Loadingbar.vue'
import SlideRightModal from './elements/SlideRightModal.vue';
import { ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import { supabase } from '../supabase'
import TableElement from './elements/TableElement.vue';
import LinkEntry from './elements/LinkEntry.vue';

const username = ref("");
const auth = useAuthStore();
const links = ref([]);
const showModal = ref(false);
const loading = ref(true)
const tableElementRef = ref(null);

async function deleteLink(link) {
  console.log("Deleting link: ", link)
  const currentTable = myToggle.value ? "anon_links" : "user_links";
  const { error } = await supabase.from(currentTable).delete().eq('id', link.id);
  error ? console.error('Error deleting link:', error) : auth.fetchUserLinks(auth.user.id);
  links.value = await auth.fetchUserLinks(auth.user.id);
  hideEditForm();
}

async function setUsername(username) {
  const newUser = {
    uid: auth.user.id,
    username: username,
  };

  const { data, error } = await supabase
    .from('username_mapping')
    .upsert([newUser], { onConflict: ['uid'] });

  if (error) {
    console.error("An error occurred:", error);
    return;
  }
  console.log("Submitted new name", newUser.uid);
}


function hideEditForm() {
  if (tableElementRef.value) {
    tableElementRef.value.hideEditForm();
  }
}

let anonLinksCache = null;
let myToggle = ref(false);
let tempTableStorage = null;

async function toggleTable() {
  myToggle.value = !myToggle.value;
  if (myToggle.value == false) {
    links.value = tempTableStorage;
  } else {
    tempTableStorage = links.value;
    if (anonLinksCache === null) {
      anonLinksCache = await auth.fetchAnonLinks(auth.user.id);
    }
    links.value = anonLinksCache;
  }
}

async function addLink(link, description, isPrivate) {
  let tmp = {
    "user_id": auth.user.id,
    "link_url": link,
    "link_name": description,
    "is_private": isPrivate,
  }
  const { error } = await supabase.from('user_links').insert([tmp])
  if (error) {
    console.error('Error updating link:', error);
    return;
  }
  links.value = await auth.fetchUserLinks(auth.user.id);
  hideEditForm();
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
      loading.value = false;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
})
</script>

<style scoped>
</style>
