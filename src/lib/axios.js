/*
 * @Descripttion: 
 * @version: 
 * @Author: xiexing
 * @Date: 2020-08-02 19:46:04
 * @LastEditors: xiexing
 * @LastEditTime: 2020-08-02 21:20:58
 */
/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axiosClass from 'axios'

const axios = axiosClass.create()

axios.defaults.baseURL = '//www.it2money.cn'

// 请求超时时间
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/json'
// function formData (data) {
//   let formdata = new FormData()
//   Object.keys(data).forEach(key => {
//     formdata.append(key, data[key])
//   })
//   return formdata
// }
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.body = data => data
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    const data = response.data
    if (+data.respCode === 0) {
      return Promise.resolve(data.respData)
    } else {
      return Promise.reject(data.errMsg || data.errorMsg)
    }
  } else {
    return Promise.reject(response)
  }
})

// axios 方法属性读取代理处理函数
const axiosHandler = {
  get: (target, prop) => {
    const funcArr = ['get', 'head', 'options', 'delete', 'post', 'put', 'patch']
    if (!funcArr.includes(prop)) {
      return target[prop]
    }
    const originMethod = target[prop]

    return function (...args) {
      if (['get', 'head', 'options', 'delete'].includes(prop)) {
        const data = {
          params: args[1],
          ...args[2]
        }
        return originMethod.call(target, args[0], data)
      }
      return originMethod.apply(target, args)
    }
  }
}

export default new Proxy(axios, axiosHandler)
