import { request } from "./request";

export function detailGoods(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function recommend(){
  return request({
    url:'/recommend'
  })
}

export class goods{
  constructor(itemInfo,columns,services)
  {
    this.title=itemInfo.title,//标题
    this.newPrice=itemInfo.price, //现价
    this.oldPrice=itemInfo.oldPrice,//原价
    this.discount=itemInfo.discountDesc,//情况
    this.columns=columns,//销量 收藏
    this.services=services,
    this.lowPrice=itemInfo.lowNowPrice
  }
}
export class goodsParams{
  constructor(info,rule)
  {
    this.into=info.set;
    this.rule=rule.tables[0]
  }
}
export class shop{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo,
    this.name=shopInfo.name,
    this.score=shopInfo.score,
    this.cfans=shopInfo.cFans,
    this.cgoods=shopInfo.cGoods,
    this.csells=shopInfo.cSells
  }
}
