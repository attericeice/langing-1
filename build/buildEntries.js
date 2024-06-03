const path = require('path');

module.exports = function buildEntries() {
    return {
        index: path.resolve(__dirname, '..', 'src', 'scripts', 'index.js'),
    }
}