var path = require("path");
var webpack = require("webpack");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    //entry: ["./utils", "./app"],
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    // output: {
    //     path: path.resolve('build/js/'),
    //     publicPath: '/public/assets/js/',
    //     filename: "bundle.js"
    // },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
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
    },
    plugins: [commonsPlugin]
}