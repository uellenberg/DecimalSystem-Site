module.exports = {
    entry: "./src/js/index.ts",
    mode: "production",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
};