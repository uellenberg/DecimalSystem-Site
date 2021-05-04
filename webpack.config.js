module.exports = {
    entry: "./src/js/index.js",
    mode: "production",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
};