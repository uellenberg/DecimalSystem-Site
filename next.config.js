const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    typescript: {
        includePaths: [path.join(__dirname, "js")]
    },
    basePath: '/DecimalSystem',
    assetPrefix: '/DecimalSystem/',
}