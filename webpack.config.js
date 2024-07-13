const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "reactEventListenerUtils",
    libraryTarget: "umd", // Universal Module Definition
    globalObject: "this", // Fixes an issue when using `window` in Node.js environments
  },
  resolve: {
    extensions: [".js", ".jsx"],
    e,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React", // Indicate global variable if using UMD
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM", // Indicate global variable if using UMD
    },
  },
};
