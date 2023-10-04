<template>
    <div style="display: grid; align-items: center; justify-content: center">
        <div class="wrapper flex">
            <div class="inputfield">
                <input v-model="inputData" placeholder="Submit A new link"
                    class="p-2 w-full bg-gray-800 text-white rounded" />
            </div>
            <div class="ml-4">
                <select v-model="description" class="p-2 bg-gray-800 text-white rounded">
                    <option disabled value="">Select description</option>
                    <option>Important</option>
                    <option>Optional</option>
                    <option>Urgent</option>
                </select>
            </div>
            <div class="ml-4">
                <input type="checkbox" id="private" v-model="isPrivate" class="form-checkbox h-5 w-5 text-blue-600">
                <label for="private" class="ml-2 text-white">Private</label>
            </div>
            <div class="ml-4">
                <button @click="$emit('addLink', inputData, description, isPrivate)"
                    class="px-4 py-2 bg-blue-500 text-white rounded">Submit
                    Link</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['addLink'])
</script>