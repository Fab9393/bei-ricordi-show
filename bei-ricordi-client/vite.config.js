import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default {
  base: '/bei-ricordi-show/', 
  plugins: [vue()],// <-- nome del repo
}
