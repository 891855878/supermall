import { request } from "./request";

export function getHomeRequest(){
  return request({
   url:'/home/multidata'
  })
}
