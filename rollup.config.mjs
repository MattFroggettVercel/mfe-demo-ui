import terser from "@rollup/plugin-terser";
import baseConfig from "./rollup.base.config.mjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts", // Entry point for the library
    output: {
      format: "esm",
      file: "dist/index.js",
    },
    external: ["react", "react-dom"],
    plugins: [...baseConfig.plugins],
  },
  {
    input: "src/index.ts", // Type Definitions
    output: {
      file: "dist/index.d.ts",
      format: "esm",
    },
    plugins: [dts()],
  },
  // {
  //   input: "src/components/styles.css",
  //   output: {
  //     file: "dist/style.css",
  //   },
  //   plugins: [
  //     postcss({
  //       modules: false,
  //       extract: false,
  //     }),
  //   ],
  // },
];
