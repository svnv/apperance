const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const prism = require('prismjs');

module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    },
    devtool: 'inline-source-map',

    module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        breaks: true,
                        highlight: function(code, lang) {
                            return prism.highlight(code, prism.languages['html'], 'html');
                        }
                    }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },{
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader" // translates CSS into CommonJS
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Apperance',
            hash: true,
            cache: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new StyleLintPlugin({}),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000
    }
};