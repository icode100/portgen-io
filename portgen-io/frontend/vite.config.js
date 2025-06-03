import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy:{
      '/portapi': "http://localhost:8000"
    }
  },
  plugins: [react(), tailwindcss()],

})
