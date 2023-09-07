import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@App': path.resolve(__dirname, './src/app'),
    },
  },
  plugins: [svgr(), react()],
})
