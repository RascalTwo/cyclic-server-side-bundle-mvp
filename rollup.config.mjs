import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
		file: 'index.dist.js',
    format: 'cjs'
  },
  plugins: [json(), commonjs(), nodeResolve({ preferBuiltins: true })]
};