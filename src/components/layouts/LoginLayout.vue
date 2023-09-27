<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-white bg-gray-800">
    <div>
      <form action="#" class="space-y-6">
        <input
          class="w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 text-gray-300"
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <input
          class="w-full px-4 py-2 bg-gray-700 border rounded-md focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 text-gray-300"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <div class="relative inline-flex items-center">
              <input
                type="checkbox"
                name="remembr_me"
                class="w-10 h-4 transition bg-gray-700 border-none rounded-full shadow-inner outline-none toggle checked:bg-blue-500 focus:outline-none"
              />
              <span class="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-gray-300 rounded-full shadow-sm"></span>
            </div>
            <span class="ml-3 text-sm text-gray-400">Remember me</span>
          </label>
  
          <a
            @click.prevent="handleForgotPassword"
            href="#"
            class="text-sm text-blue-400 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 font-medium text-gray-800 transition-colors duration-200 bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
