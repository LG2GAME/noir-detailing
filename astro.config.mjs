// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import { fileURLToPath } from 'node:url'

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    ssr: {
      noExternal: ['vue3-compare-image']
    }
  }
})
