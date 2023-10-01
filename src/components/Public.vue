<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-white">
    <div>
      <main class="p-5">
        <div>
          Something new
        </div>
        <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-200 rounded-md">
          <table class="w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in users" :key="user.email" class="transition-all hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" :src="user.avatar" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ user.link_url }}</div>
                      <div class="text-sm text-gray-500">{{ user.link_name }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                  <div class="text-sm text-gray-500">Optimization</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span>
                    {{ user.active ? 'Active' : 'Not Active' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{{ user.role }}</td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">???</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { users } from '../data/users'
import { supabase } from '../supabase'

async function getUUID(username) {
  const { data, error } = await supabase
    .from('username_mapping')
    .select('uid')
    .eq('username', username);

  if (error) {
    console.error("Error fetching UUID:", error);
    return null;
  }

  if (data && data.length > 0) {
    return data[0].uid;
  } else {
    console.error("No user found with this username");
    return null;
  }
}

async function fetchUserLinks(uuid) {
  const { data, error } = await supabase
    .from('user_links')
    .select('*')
    .eq('user_id', uuid)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error("Error fetching links:", error);
    return null;
  }

  return data || [];
}

export default defineComponent({
  data() {
    return {
      users: users,
      profileId: null
    }
  },
  async mounted() {  // Make this function async
    try {
      this.profileId = this.$route.params.id;
      const uuid = await getUUID(this.profileId);
      if (uuid) {
        this.users = await fetchUserLinks(uuid);
      } else {
        console.error("UUID not found for given username");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  watch: {
    '$route'(to, from) {
      this.profileId = to.params.id;
    }
  }
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
