<template>
  <div class="flex flex-col items-center w-16 p-4 bg-gray-800">
    <router-link to="/" class="mb-4 text-gray-400 hover:text-white">
      <i class="fa fa-home fa-2x"></i>
    </router-link>
    <router-link to="/profile" class="mb-4 text-gray-400 hover:text-white">
      <i class="fa fa-user fa-2x"></i>
    </router-link>
    <router-link to="/settings" class="mb-4 text-gray-400 hover:text-white">
      <i class="fa fa-cog fa-2x"></i>
    </router-link>
    <router-link to="/about" class="mb-4 text-gray-400 hover:text-white">
      <i class="fa fa-info fa-2x"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VerticalNavbar',
}
</script>

<style scoped>
.router-link-exact-active {
  color: #fff !important;
}

</style>
