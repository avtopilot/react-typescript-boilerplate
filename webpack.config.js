const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: "source-map",
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/index')
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ],
};