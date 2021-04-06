import { terser } from "rollup-plugin-terser";

export default {
    input: 'dist-transpiled/index.js',
    output: [
        {
            dir: 'dist/',
            entryFileNames: '[name].esm.js',
            chunkFileNames: '[name]-[hash].esm.js',
            format: 'es',
        },
        {
            dir: 'dist/',
            format: 'commonjs',
            preferConst: false,
        },
    ],
    external: ['vue']
};
