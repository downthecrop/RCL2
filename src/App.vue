<template>
  <div v-if="Layout">
    <Layout>
      <router-view />
    </Layout>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from './supabase';

export default {
  setup() {
    const { currentRoute } = useRouter()
    const Layout = computed(() => {
      return currentRoute.value.meta.layout
    })
    const session = ref(null);

    onMounted(() => {
      supabase.auth.getSession().then(({ data }) => {
        session.value = data.session;
      });

      supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session;
      });
    });

    return {
      Layout,
      session,
    };
  },
}
</script>

<style>
/* Your CSS styles can go here */
</style>
