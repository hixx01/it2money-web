/*
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-08-02 20:34:28
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 20:35:01
 */
let path = require('path')
const resolve = (pathname = '') => {
  return path.join(__dirname, './', pathname)
}
module.exports = {
  publicPath: './',
  chainWebpack: (config)=>{
    config.resolve.alias
    .set('@',resolve('src'))
  },
  devServer: {
    disableHostCheck: true,
  }
}
