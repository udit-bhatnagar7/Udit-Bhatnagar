import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react"
            if (id.includes("framer-motion")) return "motion"
            if (id.includes("swiper")) return "swiper"
            if (id.includes("lucide-react")) return "icons"
            return "vendor"
          }
        }
      }
    }
  }
})