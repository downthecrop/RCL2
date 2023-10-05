<template>
    <div class="grid place-items-center">
        <div class="wrapper flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div class="inputfield w-full">
                <input v-model="inputData" placeholder="Submit A new link"
                    class="p-2 w-full bg-gray-800 text-white rounded" />
            </div>
            <div class="w-full md:w-auto">
                <select v-model="description" class="p-2 w-full md:w-auto bg-gray-800 text-white rounded">
                    <option disabled value="">Select description</option>
                    <option>Important</option>
                    <option>Optional</option>
                    <option>Urgent</option>
                </select>
            </div>
            <div class="grid place-items-center w-full md:w-auto">
                <input type="checkbox" id="private" v-model="isPrivate" class="form-checkbox h-5 w-5 text-blue-600">
            </div>
            <div class="w-full md:w-auto">
                <button @click="$emit('addLink', inputData, description, isPrivate)"
                    class="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
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
</script>
<style></style>