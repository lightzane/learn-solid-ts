import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },

  // [ Lightzane ]
  // =========================================================================
  //    Enable to run production build in `file:///` protocol
  // =========================================================================
  // * [Lz] 1. Base href to root
  base: '',
  build: {
    outDir: 'docs',
    target: 'esnext',
    // * [Lz] 2. Supply options to rollup to output in `umd`
    rollupOptions: {
      output: {
        format: 'umd',
      },
    },
    // * [Lz] 3. In docs/index.html - script.js, Remove -> type="module" crossorigin and change to "defer"
  },
});
