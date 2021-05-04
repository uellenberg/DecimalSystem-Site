module.exports = {
    entry: "./src/js/index.ts",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
        library: "bundle"
    }
};