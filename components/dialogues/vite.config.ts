import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dts from 'vite-plugin-dts';
import eslintPlugin from 'vite-plugin-eslint';
import { ViteAliases as viteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Script.tsx'),
      name: '@viveljs/dialogue',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
        sourcemapExcludeSources: true,
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
  plugins: [
    reactRefresh(),
    dts({
      exclude: ['src/main.tsx'],
    }),
    eslintPlugin({
      exclude: ['node_modules', '/@react-refresh', 'dist'],
    }),
    viteAliases({ depth: 2 })
  ],
});
