# Learn Solid

Learning my first **Solid**js (https://www.solidjs.com)

## How this Project is Created

1. `npx degit solidjs/templates/ts learn-solid-ts`
2. `npm install`

See initial [README](README-initial.md)

## Vite Templates

https://github.com/solidjs/templates

A selection of templates we can use for `npx degit solidjs/templates/<template>`

## Official Getting Started

https://www.solidjs.com/guides/getting-started#try-solid

## To enable run production build in file:/// protocol

See [vite.config.ts](vite.config.ts)

```ts
export default defineConfig({

    ...

    // =========================================================================
    //    Enable to run production build in `file:///` protocol
    // =========================================================================
    // * [Lz] 1. Base href to root
    base: '',
    build: {
    outDir: 'docs',
    // * [Lz] 2. Supply options to rollup to output in `umd`
    rollupOptions: {
        output: {
            format: 'umd',
        },
    },
    // * [Lz] 3. In docs/index.html - script.js, Remove -> type="module" crossorigin and change to "defer"
}),
```
