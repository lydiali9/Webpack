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

