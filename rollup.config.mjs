import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'index.js',
  output: {
		file: 'index.dist.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [json(), commonjs(), nodeResolve({ preferBuiltins: true }), sourcemaps()]
};