
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on 0.0.0.0 to fix "Network: use --host to expose"
    // Allow the specific host as requested
    allowedHosts: ['ad.00oo.nyc.mn']
  },
})
