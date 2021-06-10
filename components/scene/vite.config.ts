import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { ViteAliases } from 'vite-aliases'
import dts from 'vite-plugin-dts'

const aliases = ViteAliases({
	/**
	 * Relative path to the project Directory
	 */
	dir: 'src',

	/**
	 * Prefix Symbol for the Aliases
	 */
	prefix: '@',

	/**
	 * Allow Searching for Subdirectories
	 */
	deep: true,

	/**
	 * Search Depthlevel for Subdirectories
	 */
	depth: 1,

	/**
	 * Creates a Logfile in `logs` Folder
	 * Will be relative to project Directory
	 */
	allowLogging: false,

	/**
	 * Allow global project Directory alias
	 */
	allowGlobalAlias: true,

	/**
	 * Ignore Error on Duplicate Folders
	 */
	ignoreDuplicates: false,

	/**
	 * Generates Paths in IDE Config File
	 * Works with JS oder TS
	 * For Typescript: set `useTypescript` true
	 */
	useConfig: false,

	/**
	 * Will generate Paths in tsconfig
	 * Used in Combination with `useConfig`
	 */
	useTypescript: false,

	/**
	 * Root path of Vite project
	 */
	root: process.cwd()
});

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
		alias: aliases
	},
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    }
  },
  plugins: [
    reactRefresh(),
    dts()
  ]
})
