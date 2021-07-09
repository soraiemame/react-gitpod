const path = require("path")

module.exports = {
    context: path.join(__dirname,"src"),
    entry: "./index.js",
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        }]
    },
    output: {
        path: __dirname + "/public/",
        filename: "main.js"
    },
    devServer: {
        contentBase: "./public/",
        inline: true,
        hot: true
    }
}