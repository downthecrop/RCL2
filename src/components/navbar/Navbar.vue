<template>
  <header
    class="sticky top-0 z-10 bg-gray-900 flex-shrink-0 border-b border-gray-700 transition-transform duration-500"
    :class="{ '-translate-y-full': scrollingDown, '-translate-y-0': scrollingUp }"
  >
    <div class="flex items-center justify-between p-2">
      <div class="flex items-center space-x-3">
        <RouterLink to="/home" class="p-2 text-xl font-semibold tracking-wider text-white uppercase">
          RCL2
        </RouterLink>

        <button @click="toggleSidebar" class="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
          <span class="sr-only">Toggle sidebar</span>
          <ChevronDoubleRightIcon
            class="w-4 h-4 text-gray-300"
            :class="{'transform transition-transform -rotate-180': isSidebarOpen}"
          />
        </button>
      </div>
      <nav aria-label="Secondary" class="flex items-center space-x-3">
        <IconButton text="Open search panel" @click="openSearchPanel">
          <SearchIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </IconButton>

        <IconButton text="Open notifications panel" @click="openNotificationsPanel">
          <BellIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </IconButton>

        <IconButton text="Open settings panel" @click="openSettingsPanel">
          <CogIcon aria-hidden="true" class="w-6 h-6 text-gray-300" />
        </IconButton>

        <UserMenu />
      </nav>
    </div>
  </header>
</template>

<script>
// Script remains the same
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import IconButton from '../global/IconButton.vue';
import { ChevronDoubleRightIcon, SearchIcon, BellIcon, CogIcon } from '@heroicons/vue/outline';
import {
  scrollingDown,
  scrollingUp,
  toggleSidebar,
  isSidebarOpen,
  isSearchPanelOpen,
  isNotificationsPanelOpen,
  isSettingsPanelOpen,
} from '../../states/globalStates';

export default defineComponent({
  components: {
    IconButton,
  },
  computed: {
    scrollingDown() {
      return scrollingDown.value;
    },
    scrollingUp() {
      return scrollingUp.value;
    },
    isSidebarOpen() {
      return isSidebarOpen.value;
    },
  },
  methods: {
    toggleSidebar() {
      toggleSidebar();
    },
    openSearchPanel() {
      isSearchPanelOpen.value = true;
    },
    openNotificationsPanel() {
      isNotificationsPanelOpen.value = true;
    },
    openSettingsPanel() {
      isSettingsPanelOpen.value = true;
    },
  },
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
