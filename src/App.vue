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

export default {
  setup() {
    const { currentRoute } = useRouter()
    const Layout = computed(() => {
      return currentRoute.value.meta.layout
    })
    const session = ref(null);
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
