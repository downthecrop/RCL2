<template>
    <div class="grid place-items-center bg-gray-900 p-4">
        <div class="wrapper flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-0">
            <div class="inputfield w-full bg-gray-700 rounded flex items-center h-12">
                <input v-model="inputData" placeholder="Submit A new link"
                    class="p-2 w-full text-gray-300 bg-gray-800 rounded-l focus:outline-none h-full" />
                <div class="hidden md:flex items-center h-full" v-if="showDescription">
                    <input v-model="description" class="p-2 w-full text-gray-300 bg-gray-800 focus:outline-none h-full"
                        placeholder="Description">
                </div>
                <div class="flex items-center h-full">
                    <button @click="toggleDescription" class="text-gray-300 bg-gray-800 px-2 py-1 focus:outline-none h-full">
                        {{ showDescription ? '^' : 'v' }}
                    </button>
                    <button @click="togglePrivate" :class="isPrivate ? 'bg-red-600' : 'bg-green-600'"
                        class="text-gray-300 px-2 py-1 focus:outline-none h-full">
                        {{ isPrivate ? 'Private' : 'Public' }}
                    </button>
                    <button @click="submitData" class="bg-blue-600 text-gray-300 rounded-r px-2 py-1 focus:outline-none h-full">
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
/* Eliminating borders and rounded corners from individual elements */
input {
    border: none !important;
}

/* Rounded corners only for the outermost element */
.inputfield {
    border-radius: 0.25rem;
    height: 2.5rem;  /* Set a height for the outer input field */
}

/* Removing rounded corners from all buttons and input fields */
button, input {
    border-radius: 0;
    height: 100%;  /* Make buttons and inputs take full height */
}
</style>
