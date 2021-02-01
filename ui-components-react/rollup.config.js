import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

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
    external: ['react', 'react-dom', '@ai/ui-components/loader'],
    plugins: [resolve(), sourcemaps()],
};