import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite 配置。本地预览固定在 5173 端口。
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
});
