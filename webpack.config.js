const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const highlight = require('highlight.js');


// markdown conver to html
// var marked = require("marked");
// var renderer = new marked.Renderer();


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',

  // modules
  module: {
    rules: [{
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                //those options are optional
                options: {
                    breaks: true,
                    highlight: function(code) {
                        return highlight.highlightAuto(
                            code, [ 'html', 'css', 'javascript' ]
                        ).value;
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

  // html loader
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Apperance',
        hash: true,
        cache: true
      }),
      new webpack.HotModuleReplacementPlugin()
  ],

  // dev server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  }
};