import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dts from 'vite-plugin-dts';
import eslintPlugin from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Script.tsx'),
      name: '@viveljs/dialogue',
      formats: ['es'],
      fileName: 'my-lib',
    },
  },
  plugins: [
    reactRefresh(),
    dts(),
    eslintPlugin({
      exclude: ['node_modules', '/@react-refresh'],
    }),
  ],
});
