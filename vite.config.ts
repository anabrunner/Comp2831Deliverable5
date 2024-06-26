import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  checker({ typescript: true })],
  server: {
    port: parseInt(process.env.PORT) || 2000,
  },
  base: '/'
});
