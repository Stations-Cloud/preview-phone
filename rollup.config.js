import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
            declaration: true,
            clean: true,
            useTsconfigDeclarationDir: false,
        }),
        postcss({
            extensions: [".css"],
        }),
    ],
    external: ["react", "react-dom", "styled-components"],
};