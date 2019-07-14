const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./client/index.jsx",
    mode: "development",
    output: {
        filename: "./dist/app-bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}