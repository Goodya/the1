const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        "index":"./src/index.js",
        "index2":"./src/index2.js"
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        compress:true,
        open:true,
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html',
            title:"title1",
            chunks:['index']
        }),
        new HtmlPlugin({
            filename:'index2.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html',
            title:"title2",
            chunks:['index2']
        }),
        new ExtractTextPlugin("css/index.css"),
    ]
}