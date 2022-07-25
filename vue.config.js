const { defineConfig } = require("@vue/cli-service");

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const path = require("path");
const imagePlugin = new ImageminPlugin({
  disable: process.env.NODE_ENV !== "production", // Disable during development
  pngquant: {
    quality: "65-80",
  },
  jpegtran: {
    // jpeg
    quality: 65,
  },
  gifsicle: {
    // gif
    interlaced: true,
    optimizationLevel: 3,
  },
  cacheFolder: path.join(__dirname, "./imageMinCache"),
});

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  configureWebpack: {
    plugins: [imagePlugin],
  },
});
