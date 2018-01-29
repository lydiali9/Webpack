var path = require("path");

module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    watch: true,

    devServer: {
        contentBase: 'public'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader',
                //this is similar to defining a preloader
                enforce: 'pre'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loaders: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },

    resolve: {
        extensions: [' ', '.js', '.es6']
    }
}