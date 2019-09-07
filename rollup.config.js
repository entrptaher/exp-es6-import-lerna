import run from "rollup-plugin-run";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';

export default {
  input: "./index.js",
    output: {
      file: "./build/index.js",
      format: "cjs"
  },
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
