module.exports = {
    entry: ["./utils", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,

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