const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: {
      index: "index.html"
    },
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/**/*.scss"]
            }
          }
        ]
      },
      { test: /.*\.(gif|svg|png|jpe?g)$/i, use: "file-loader" }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
