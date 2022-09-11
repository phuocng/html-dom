import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const rootPackagePath = process.cwd();
const input = path.join(rootPackagePath, 'js/index.ts');
const outputDir = path.join(rootPackagePath, '_site/js');

const plugins = [
    nodeResolve(),
    typescript({
        tsconfig: path.join(rootPackagePath, 'tsconfig.json'),
    }),
];
const pluginsWithMinified = plugins.concat(
    minifyHTML(),
    terser(),
);

export default [
    // Minified UMD
    {
        input,
        output: {
            file: path.join(outputDir, 'index.min.js'),
            format: 'iife',
            name: 'HtmlDomWeb',
        },
        plugins: pluginsWithMinified,
    },
];
