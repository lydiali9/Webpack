module.exports = {
    entry: ["./utils", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loaders: "babel-loader"
            }
        ]
    },

    resolve: {
        extensions: [' ', '.js', '.es6']
    }
}