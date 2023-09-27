<template>
  <div class="max-w-[100vw] flex min-h-screen antialiased text-gray-300 bg-gray-900">
    <Sidebar />
    <div class="flex max-w-full flex-col flex-1">
      <Navbar />
      <div class="flex-1">
        <div>
          <main class="p-5">
            <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-700 rounded-md">
              <table class="w-full divide-y divide-gray-700">
                <thead class="bg-gray-800">
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Name
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Title
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Status
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Role
                    </th>
                    <th scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-800 divide-y divide-gray-700">
                  <tr v-for="user in users" :key="user.email" class="transition-all hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-10 h-10 rounded-full" :src="user.avatar" alt="" />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-300">{{ user.name }}</div>
                          <div class="text-sm text-gray-500">{{ user.email }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-300">Regional Paradigm Technician</div>
                      <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="text-sm text-gray-300">
                        {{ user.active ? 'Active' : 'Not Active' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{{ user.role }}</td>
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

<script>
// No changes in the script
import { defineComponent, onMounted, onUnmounted } from 'vue'
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../navbar/Navbar.vue'
import { users } from '../../data/users'
import SettingsPanel from '../panels/SettingsPanel.vue'
import { handleResize, handleScroll, isSidebarOpen } from '../../states/globalStates'

export default defineComponent({
  components: {
    Sidebar,
    Navbar,
    SettingsPanel,
  },
  setup(_, { slots }) {
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isSidebarOpen,
    }
  },
  data() {
    return {
      users: users,
    }
  },
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
