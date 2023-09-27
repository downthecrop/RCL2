<template>
  <Panel :show="isSettingsPanelOpen" title="Settings" @close="closeSettingsPanel">
    <div>Settings Content</div>
  </Panel>
</template>

<script>
import { defineComponent } from 'vue';
import Panel from './Panel.vue';
import { isSettingsPanelOpen } from '../../states/globalStates';

export default defineComponent({
  components: {
    Panel,
  },
  methods: {
    closeSettingsPanel() {
      isSettingsPanelOpen.value = false;
    },
  },
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
