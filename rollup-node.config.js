import run from "rollup-plugin-run";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';
import baseOptions from './rollup.config';

export default {
  ...baseOptions,
  plugins: [
    json(),
    run(),
    commonjs({
      include: /node_modules/
    }),
    nodeResolve({
      mainFields: ["module", "jsnext:main"],
      only: [/@automatio/]
    })
  ]
};
