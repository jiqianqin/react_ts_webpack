var HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: '/dist',
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //生成 html 文件的文件名。默认为 index.html.
            //根据自己的指定的模板文件来生成特定的 html 文件。
            //这里的模板类型可以是任意你喜欢的模板，可以是 html, jade, ejs, hbs, 等等，但是要注意的是，使用自定义的模板文件时，需要提前安装对应的 loader， 否则webpack不能正确解析。
            template: "./src/index.html",
            title: "顾名思义，设置生成的 html 文件的标题。"
        })
    ]
}

module.exports = config