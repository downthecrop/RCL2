<template>
    <div class="grid place-items-center bg-gray-900">
        <div class="wrapper flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0">
            <div class="inputfield w-full rounded flex items-center h-10">
                <input v-model="inputData" placeholder="Submit A new link"
                    class="p-2 w-full text-gray-300 bg-gray-900 focus:outline-none h-full text-sm" />
                <div class="hidden md:flex items-center h-full" v-if="showDescription && showToggles">
                    <input v-model="description"
                        class="p-2 w-full text-gray-300 bg-gray-900 focus:outline-none h-full text-sm"
                        placeholder="Description">
                </div>
                <div class="flex items-center h-full">
                    <button @click="toggleDescription"
                        class="text-gray-300 bg-gray-900 px-2 py-0.5 focus:outline-none text-sm" v-if="showToggles">
                        <font-awesome-icon
                            :icon="['fas', showDescription ? 'chevron-up' : 'chevron-down']"></font-awesome-icon>
                    </button>
                    <button @click="togglePrivate" :class="isPrivate ? 'border-pink-500' : 'border-blue-500'"
                        class="border text-gray-300 px-2 py-0.5 focus:outline-none text-sm" v-if="showToggles">
                        <font-awesome-icon :icon="['fas', isPrivate ? 'lock' : 'unlock']"></font-awesome-icon>
                    </button>
                    <button @click="submitData"
                        class="border border-green-400 text-gray-300 rounded-r px-2 py-0.5 focus:outline-none text-sm">
                        <font-awesome-icon icon="paper-plane"></font-awesome-icon>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp, faLock, faUnlock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faChevronDown, faChevronUp, faLock, faUnlock, faPaperPlane);
const emit = defineEmits(['addLink'])
const { showToggles = true } = defineProps(['showToggles']) // Optional prop
const isPrivate = ref(false)
const inputData = ref("")
const description = ref("")
const showDescription = ref(false)

const submitData = () => {
    emit('addLink', inputData.value, description.value, isPrivate.value)
}

const toggleDescription = () => {
    showDescription.value = !showDescription.value
}

const togglePrivate = () => {
    isPrivate.value = !isPrivate.value
}
</script>


<style scoped>
/* Updated style */
input {
    border: none !important;
}

.inputfield {
    border-radius: 0.25rem;
    height: 2.5rem;
}

input {
    border-radius: 0;
    height: 100%;
}
</style>