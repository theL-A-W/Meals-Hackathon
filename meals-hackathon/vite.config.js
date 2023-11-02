
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add "react-router-dom" to the list of external packages
      external: ['react-router-dom'],
    },
  },
});