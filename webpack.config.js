const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
      assetModuleFilename: '[name][ext]',
      // publicPath: isProduction ? '/dist/' : '/',
      publicPath: '',
    },
    devtool: !isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        // {
        //   test: /\.jsx?$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env', '@babel/preset-react'],
        //       cacheDirectory: true,
        //       cacheCompression: false,
        //     },
        //   },
        // },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: './src/index.html',
      }),

      // new BundleAnalyzerPlugin(),
      new ESLintPlugin({}),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'node_vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },

          common: {
            test: /[\\/]src[\\/]components[\\/]/,
            chunks: 'all',
            minSize: 0,
          },
        },
      },
      runtimeChunk: {
        name: 'manifest',
      },
    },

    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    //   minimize: true,
    //   minimizer: [
    //     new CssMinimizerPlugin(),
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: {
    //           drop_console: true,
    //         },
    //       },
    //     }),
    //   ],
    // },
  };
};