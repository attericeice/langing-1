const buildEntries = require("./build/buildEntries");
const buildPlugins = require('./build/buildPlugins');
const buildLoaders = require('./build/buildLoaders');
const buildResolvers = require('./build/buildResolvers');
const buildDevServer = require('./build/buildDevServer');
const path = require('path');

module.exports = (env) => {
    const isDev = env.mode === 'development';
    const config = {
        mode: env.mode ?? 'development',
        entry: buildEntries(),
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: 'assets/[hash:8][ext]',
            clean: true,
        },
        plugins: buildPlugins(isDev),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(env) : undefined,
        devtool: isDev ? 'inline-source-map' : false,
        stats: 'minimal',
    }
    return config;
}



