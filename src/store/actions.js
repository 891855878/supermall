import { ADD_COUNT,ADD_SHOP } from "./mutation-types"
export default {
  addShop(content,payload){
    // state.shoppings.push(payload)
   return new Promise((resolve,reject)=>{
    let olditem=null
    for(let item of content.state.shoppings)
    {
      if(item.iid==payload.iid)
      {
        olditem=item
      }

    }
    if(olditem)
    {
     content.commit( ADD_COUNT,olditem)
     resolve('当前物品数量+1')
    }
    else
    {
      content.commit(ADD_SHOP ,payload)
      resolve('添加购物车成功')
    }
   })
  }
}
