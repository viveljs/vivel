import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ViteAliases as aliases } from 'vite-aliases';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Scene',
      formats: ['es'],
      fileName: 'index',
    },
  },
  plugins: [reactRefresh(), dts(), aliases({ depth: 2 })],
});
