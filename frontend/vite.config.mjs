import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Export the config object directly
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
