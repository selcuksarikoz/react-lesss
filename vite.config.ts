import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [react(), mkcert()],
})



// mkcert https://localhost:3000
// cva - variantlar olusturmak icin
// clsx - className birlestirmek icin