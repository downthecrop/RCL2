<template>
  <button
    :type="type"
    v-bind="$attrs"
    class="flex items-center justify-center p-2 text-gray-400 transition-colors bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200 hover:text-gray-500"
  >
    <span class="sr-only">{{ text }}</span>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
