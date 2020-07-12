const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const envAplicacion =  process.env.NODE_ENV !== 'production';
console.log(envAplicacion);

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                   envAplicacion ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },          
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};