
const path = require('path')

module.exports = {
    entry:'./src/index.js',         // 项目入口

    output:{
        filename:"bundle.js",   // 打包后的文件名称
        path:path.resolve(__dirname,"dist")  // 默认打包的目录
    }

}