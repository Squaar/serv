const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const www = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'serv.bundle.js',
        path: path.resolve(__dirname, 'dist-www')
    },
    target: 'web',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'serv', template: path.resolve(__dirname, 'src', 'index.html')}),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
        ]
    }
};

const electron = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'serv.bundle.js',
        path: path.resolve(__dirname, 'dist-electron')
    },
    target: 'electron-main',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: 'serv', template: path.resolve(__dirname, 'src', 'index.html')}),
        new CopyPlugin([
            {from: path.resolve(__dirname, 'main.js'), to: path.resolve(__dirname, 'dist-electron')},
            {from: path.resolve(__dirname, 'package.json'), to: path.resolve(__dirname, 'dist-electron')}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
        ]
    }
};

module.exports = [www, electron];