import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/onlineshop/", // Ensure assets load properly
  server: {
    port: 8080,          // Make Vite serve on the expected port
    host: "0.0.0.0",     // Allow external access inside the cluster
  },
  plugins: [react()],
});


