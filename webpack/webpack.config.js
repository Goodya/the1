const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack.js');
const $ = require('jquery');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:"development",
    entry: entry,
    output:{
        path:path.resolve(__dirname,'dist'),  //必须用绝对路径
        filename:'[name].js',
        publicPath: 'http://localhost:8080/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: [{
                        loader:"css-loader",
                        options: {importLoader: 1},   
                    },"postcss-loader"]
                })
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:'500',
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test:/\.js$/,
                use: [
                    {
                        loader:"babel-loader",
                        options:{
                           presets: ["env","react"] 
                        }   
                    }
                ],
                exclude:/node_modules/
            },
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename:'a.html',
            // title:'title1',
            chunks:['index']
        }),
        // new ExtractTextPlugin("css/styles.css"),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin("洋哥好！"),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/pubilc',
            to: './pubilc'
        }])
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        // compress:true,
        open:true

    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    }
}