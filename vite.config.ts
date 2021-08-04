import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import windiCSS from 'vite-plugin-windicss';
import { ViteAliases as viteAliases } from 'vite-aliases';
import { VitePWA as pwa } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    windiCSS(),
    pwa(),
    viteAliases({
      depth: 2,
      useConfig: true,
      useTypescript: true,
      adjustDuplicates: true,
    }),
  ],
});
