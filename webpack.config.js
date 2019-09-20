
const path = require('path')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// 导入清除插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry:'./src/index.js',     // 项目入口

    // 创建开发工具
    devtool: "source-map", 

    // + 开发服务配置
    devServer: {
        port: 8000 // 默认端口是8080
   },

    output:{
        filename:"bundle.js",   // 打包后的文件名称
        path:path.resolve(__dirname,"dist")  // 默认打包的目录
    },

    module:{
        rules:[
            // 处理css文件类型
            {
                test:/\.css$/,  //匹配.css结尾的文件
                // use:[       // 匹配到css文件后使用的加载器来处理文件
                //     "style-loader",
                //     "css-loader",
                // ]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        'css-loader'
                    ]
                })
            },

            // 处理lsee文件
            {
                test:/\.less$/,  //匹配.css结尾的文件
                // use:[       // 匹配到css文件后使用的加载器来处理文件
                //     "style-loader",
                //     "css-loader",
                // ]
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[
                        'css-loader',
                        'less-loader'
                    ]
                })
            },

            // 处理图片文件
            {
                test:/\.(jpg|svg|png|gif)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            publicPath:"./images/",
                            outputPath:"images"
                        }
                    }
                ]
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中
        
        // 调用清除打包目录插件,在打包下载之前先删除之前dist文件夹
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "public/index.html"	// template指定默认html模板
        })
    
    ]

}