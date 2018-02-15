const path = require("path");
const webpack = require("webpack");
const { LoaderOptionsPlugin } = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        leonardodls_engine: ["./src/js/leonardodls_engine.js"]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
                loader: "file-loader",
                query: {
                    name: '[name].[ext]',
                    publicPath: "./",
                    outputPath: 'assets/kendo/images/'
                    //the images will be emmited to dist/assets/kendo/images/ folder
                    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
                }
            }, {
                enforce: "pre",
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
                loader: "url-loader",
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    publicPath: "./",
                    outputPath: 'assets/kendo/fonts/'
                    //the fonts will be emmited to dist/assets/kendo/fonts/ folder
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
                }
            },
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              },
              {
                test: /\.css$/,
                use: [{
                  loader: "style-loader" // creates style nodes from JS strings
                }, {
                  loader: "css-loader" // translates CSS into CommonJS
                }]
            }
        ]
    },
    plugins: [
        new LoaderOptionsPlugin({
            "options": {
                "postcss": [
                    autoprefixer()
                ],
                "lessLoader": {
                    "sourceMap": false
                },
                "context": ""
            }
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: true
            }
        })
    ]
}