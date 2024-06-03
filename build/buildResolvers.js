const path = require('path');

module.exports =  function buildResolvers() {
    return {
        extensions: ['.js', '.css'],
        alias: {'@': path.resolve(__dirname, '..', 'src')},
    }
}