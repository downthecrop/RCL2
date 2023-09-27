<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      @click="close"
      aria-hidden="true"
      class="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
    ></div>
  </Transition>
</template>

<script>
import { defineComponent, Transition } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    return {
      close,
    }
  },
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
