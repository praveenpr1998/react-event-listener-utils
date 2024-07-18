const path = require("path");
const { merge } = require("webpack-merge");

const commonConfig = {
  mode: "production",
  entry: "./src/index.js",
};

const esmConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.esm.js",
    library: {
      type: "module",
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
};

const cjsConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "reactEventListenerUtils",
      type: "umd",
    },
  },
};

module.exports = [
  merge(commonConfig, esmConfig),
  merge(commonConfig, cjsConfig),
];
