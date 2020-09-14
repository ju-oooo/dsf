module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     */
    productionSourceMap: false,
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 从 Vue CLI 3.3 起baseUrl已弃用，请使用publicPath
    // 输出文件目录
    outputDir: 'dist',
    // assetsDir: 'static',

    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 12015,
        https: false,
        hotOnly: false,
        disableHostCheck: true
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    }

}