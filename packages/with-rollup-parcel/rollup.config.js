import run from "rollup-plugin-run";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input: "./index.js",
  output: {
    file: "./build/index.js",
    format: "cjs"
  },
  plugins: [
    run(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: "node_modules/**"
    })
  ]
};
