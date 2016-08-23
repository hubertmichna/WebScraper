
module.exports = {
    entry: "./Main.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']

                }
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "index.js"
    }
};