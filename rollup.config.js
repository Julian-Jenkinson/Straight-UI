import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/straight-ui.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/straight-ui.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom'], // exclude peer dependencies
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      modules: true, // enable CSS modules support
      extract: false, // inline CSS in JS
      minimize: true,
      sourceMap: true,
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: { compilerOptions: { declaration: true, declarationDir: 'dist' } },
    }),
  ],
};