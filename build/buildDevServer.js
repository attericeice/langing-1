const path = require('path');


module.exports = function buildDevServer({port}) {
    return {
        static: path.resolve(__dirname, '..', 'dist'),
        compress: true,
        port: port ?? 3000,
        open: true,
        hot: true, 
        liveReload: true,
    }
}