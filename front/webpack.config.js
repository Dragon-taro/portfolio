const path = require("path");

module.exports = {
  entry: {
    index: ["@babel/polyfill", "./src/apps/index.tsx"],
    admin: ["@babel/polyfill", "./src/apps/admin.tsx"]
  },
  output: {
    path: path.join(__dirname, "src/bff/static/js"),
    filename: "[name].bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader?modules"]
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
