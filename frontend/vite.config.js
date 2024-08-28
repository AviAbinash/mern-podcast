import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Your backend server
        changeOrigin: true, // For virtual hosted sites
        secure: false, // Set to true if using HTTPS
        rewrite: (path) => path.replace(/^\/api/, ""),
        // Ensure 'credentials' is included if needed
        // Vite does not directly support setting 'credentials' but it’s important to configure CORS on the server-side.
      },
    },
  },
});
