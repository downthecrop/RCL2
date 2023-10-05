<template>
    <div class="grid place-items-center bg-gray-900">
        <div class="wrapper flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0">
            <div class="inputfield w-full rounded flex items-center h-10">
                <input v-model="inputData" placeholder="Submit A new link"
                    class="p-2 w-full text-gray-300 bg-gray-900 focus:outline-none h-full text-sm" />
                <div class="hidden md:flex items-center h-full" v-if="showDescription">
                    <input v-model="description"
                        class="p-2 w-full text-gray-300 bg-gray-900 focus:outline-none h-full text-sm"
                        placeholder="Description">
                </div>
                <div class="flex items-center h-full">
                    <button @click="toggleDescription"
                        class="text-gray-300 bg-gray-900 px-2 py-0.5 focus:outline-none h-8 text-sm">
                        {{ showDescription ? '^' : 'v' }}
                    </button>
                    <button @click="togglePrivate" :class="isPrivate ? 'bg-yellow-500' : 'bg-indigo-600'"
                        class="text-gray-300 px-2 py-0.5 focus:outline-none h-8 text-sm">
                        {{ isPrivate ? 'Private' : 'Public' }}
                    </button>
                    <button @click="submitData"
                        class="bg-green-500 text-gray-300 rounded-r px-2 py-0.5 focus:outline-none h-8 text-sm">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addLink'])
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