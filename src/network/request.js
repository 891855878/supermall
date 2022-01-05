import axios from 'axios'
export function request(config) {
  //创建axios实例
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  //axios的拦截器
  instance.interceptors.request.use(res=>{
    return res
  },err=>{
  })
  //响应拦截器
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
  })

  return instance(config)
}
