import { request } from "./request";

export function getHomeRequest(){
  return request({
   url:'/home/multidata'
  })
}

export function getHomeData(type,page){
  return request({
    url:'/home/data',
    // 为url添加参数
    params:{
      type,
      page
    }
  })
}
