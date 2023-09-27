import { defineConfig } from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJSX(),vue()],
})
