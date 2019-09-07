import run from "rollup-plugin-run";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

import baseOptions from './rollup.config';
baseOptions.output.format = 'iife'
baseOptions.output.name = 'driver'

export default {
  ...baseOptions,
  plugins: [
    process.env.SHOULDRUN ? run() : '',
    commonjs({
      include: /node_modules/
    }),
    nodeResolve({
      mainFields: ["module", "jsnext:main"],
    })
  ]
};
