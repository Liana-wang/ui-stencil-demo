import { terser } from "rollup-plugin-terser";

export default {
    input: 'dist-transpiled/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'umd',
            sourcemap: true
        },
        {
            file: 'dist/index.min.js',
            format: 'umd',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    external: ['ui-components', 'ui-components/loader', 'vue']
};
