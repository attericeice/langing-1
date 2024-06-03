const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = function buildPlugins(isDev) {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src', 'pages', 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
         new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
    ]
}