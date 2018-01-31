# Webpack

## Step 1
```bash
npm install webpack -g
```

## Step 2
```bash
webpack ./app.js bundle.js
```

## Step 3
Open index.html in the browser

## Step 4
add the file of webpack.config.js as following

```bash
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    }
}
```

## Step 5
```bash
webpack --watch
```

To show the resule as above command, we can write code as following
```
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js"
    },
    watch: true
}
```

## Step 6
```bash
npm install webpack-dev-server -g
webpack-dev-server
```

* Open URL `http://localhost:8080/webpack-dev-server/`], `http://localhost:8080/` or `http://localhost:8080/index.html` or `http://localhost:8080/webpack-dev-server/index.html` in the browser.

## Step 7
```bash
npm install babel-core babel-loader babel-preset-es2015 jshint jshint-loader node-libs-browser --save-dev
```

## Step 8
```bash
npm install strip-loader --save-dev | npm install http-server -g
```

```bash
webpack-dev-server -d
```

As above command, You can use the key of debugger to debug.

## Step 9
```bash
npm install css-loader style-loader --save-dev
```

## Step 10
```bash
npm install sass-loader --save-dev
```

## Step 11
```bash
npm install extract-text-webpack-plugin --save-dev
```

## Step 12
```bash
npm install autoprefixer-loader --save-dev
```

## Step 13
```bash
npm install url-loader --sve-dev
```

## Step 14
```bash
npm install ejs express morgan
npm install webpack-dev-middleware --save -dev
```

## Step 15
```bash
npm install json-loader strip-json-comments --save-dev
```

## Step 16
```bash
npm install babel-core babel-loader timestamp-webpack-plugin --save-dev
```
