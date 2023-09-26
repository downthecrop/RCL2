import { defineComponent, onMounted, onUnmounted } from 'vue'
import Footer from '../global/Footer'
import { handleResize, handleScroll, isSidebarOpen } from '../../states/globalStates'

export default defineComponent({
  setup(_, { slots }) {
    onMounted(() => {
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <div class="flex justify-center items-center min-h-screen antialiased text-gray-900 bg-white">
        <div class="flex-2">
          {slots.default()}
        </div>
      </div>
    )
  },
})
