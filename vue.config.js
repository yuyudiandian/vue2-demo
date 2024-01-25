const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8001,
    host: "0.0.0.0",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: (config) => {
    config.output.filename = `js/[name].js`;
    config.output.chunkFilename = `js/[name].js`;
    config.output.libraryTarget = "umd";
    config.optimization.runtimeChunk = true;
    config.optimization.minimize = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        // 拆分模块
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 0, // 优先级
          reuseExistingChunk: true, // 是否重用已有chunk
          enforce: true,
        },
        pages: {
          name: "pages",
          test: /[\\/]src[\\/]views[\\/]pages[\\/]/,
          priority: -10,
          minChunks: 1,
          chunks: "all",
          enforce: true,
          reuseExistingChunk: true,
        },
        common: {
          name: "commonScripts-app",
          test: /[\\/]src[\\/]scripts[\\/]/,
          priority: -20,
          minChunks: 1,
          chunks: "all",
          enforce: true,
          reuseExistingChunk: true,
        },
      },
    };
    config.module.rules.push({
      test: /\.xaml$/,
      use: [
        {
          loader: "xml-loader",
        },
      ],
    });
  },
})
