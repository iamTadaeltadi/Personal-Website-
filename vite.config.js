import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/vite-deploy/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Specify manual chunks based on your project's needs
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
}
)

  
