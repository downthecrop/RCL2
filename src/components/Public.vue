<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-300 bg-gray-900">
    <div>
      {{ status }}
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
                Title
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
                <div class="text-sm font-medium text-gray-300">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-300">Optimization</div>
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

  const router = useRoute();
  let links = ref([])
  let status = ref("")
  const auth = useAuthStore()

  onMounted(async () => {
    try {
      const uuid = await auth.getUUID(router.params.id);
      if (uuid) {
        links.value = await auth.fetchUserLinks(uuid);
        status = router.params.id
      } else {
        status = "Error User Not Found"
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  })
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
