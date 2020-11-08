/* eslint-source-type module */
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "main.mjs",
    output: {
        file: "bundle.js",
    },
    plugins: [nodeResolve()],
};
