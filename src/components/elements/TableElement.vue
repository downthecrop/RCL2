<template>
    <div class="responsive-table">
        <main class="p-5">
            <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-700 rounded-md mx-auto" style="max-width: 1200px;">
                <table class="w-full divide-y divide-gray-800" v-if="links.length > 0">
                    <thead class="bg-gray-700">
                        <tr>
                            <th scope="col" data-label="URL"
                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                URL
                            </th>
                            <th scope="col" data-label="Link Title"
                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                Link Title
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-300 uppercase">
                                Created
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-xs font-medium tracking-wider text-gray-300 uppercase">
                                Private
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-xs font-medium tracking-wider text-gray-300 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-gray-800 divide-y divide-gray-700">
                        <tr v-for="link in links" :key="link.id" class="transition-all hover:bg-gray-700">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 w-10 h-10">
                                        <img class="w-10 h-10 rounded-full"
                                            src='https://downthecrop.github.io/downthecrop.png' alt="" />
                                    </div>
                                    <div v-if="editingLink !== link.id" class="ml-4">
                                        <div class="text-sm font-medium text-gray-300">{{ link.link_url }}</div>
                                    </div>
                                    <div v-else class="ml-4">
                                        <input v-model="link.link_url" type="text"
                                            class="p-2 w-full bg-gray-900 text-white rounded">
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div v-if="editingLink !== link.id" class="text-sm text-gray-300">
                                    {{ link.link_name }}
                                </div>
                                <div v-else>
                                    <input v-model="link.link_name" type="text"
                                        class="p-2 w-full bg-gray-900 text-white rounded">
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-300">
                                    {{ formatDate(link.updated_at) }}
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                <span v-if="editingLink === link.id">
                                    <input type="checkbox" v-model="link.is_private"
                                        class="form-checkbox h-5 w-5 text-blue-600">
                                </span>
                                <span v-else>
                                    <span v-if="link.is_private"
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-green-800">
                                        Yes
                                    </span>
                                    <span v-else
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-red-800">
                                        No
                                    </span>
                                </span>
                            </td>

                            <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                <a v-if="editingLink !== link.id" href="#" class="text-indigo-400 hover:text-indigo-500"
                                    @click="showEditForm(link.id)">
                                    Edit
                                </a>
                                <div v-else class="flex flex-col items-start space-y-2">
                                    <button @click="$emit('deleteLink', link)" class="text-red-400 hover:text-red-500">
                                        Delete
                                    </button>
                                    <button @click="$emit('updateLink', link)">Confirm</button>
                                    <button @click="hideEditForm">Cancel</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex flex-col items-center justify-center p-4 text-gray-300" v-else>
                <font-awesome-icon icon="globe-asia" class="text-2xl"></font-awesome-icon>
                <font-awesome-icon icon="times" class="absolute text-red-500"
                  style="font-size: 0.5em; top: 50%; left: 50%; transform: translate(-50%, -50%);"></font-awesome-icon>
                <div class="mt-2 text-lg">There are no links to display</div>
              </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineExpose } from 'vue'
const props = defineProps({
    links: Object
})

const editingLink = ref(null);
const emit = defineEmits(['deleteLink', 'updateLink'])

function formatDate(timestamp) {
    const d = new Date(timestamp);
    const month = d.toDateString().split(' ')[1];
    const day = d.getDate(), year = d.getFullYear();
    let hour = d.getHours(), min = d.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${month} ${day} ${year} - ${hour}:${min < 10 ? '0' + min : min} ${ampm}`;
}
function showEditForm(linkId) {
    editingLink.value = linkId;
}

function hideEditForm() {
    editingLink.value = null;
}



defineExpose({
    hideEditForm
})


</script>
<style scoped>
.responsive-table table {
    @apply w-full;
}

/* Custom responsive styles */
@media screen and (max-width: 1024px) {

    .responsive-table table,
    .responsive-table thead,
    .responsive-table tbody,
    .responsive-table th,
    .responsive-table td,
    .responsive-table tr {
        @apply block;
    }

    .responsive-table thead tr {
        @apply hidden;
    }

    .responsive-table tr {
        @apply mb-0.5;
    }

    .responsive-table td {
        @apply py-2;
    }

    .responsive-table td::before {
        @apply block;
        @apply text-xs font-bold uppercase;
        @apply mb-1;
        content: attr(data-label);
    }

    .responsive-table td:first-child::before {
        @apply mt-2;
    }
}
</style>
