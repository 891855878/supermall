<template>
  <div v-if="Object.keys(goods).length!==0" >
    <div class="title1">
      {{goods.title}}
    </div>
    <div class="price">
      <div class="newPrice">{{newPrice}}</div>
      <div class="oldPrice">{{goods.oldPrice}}</div>
      <div class="discount">{{goods.discount}}</div>
    </div>
    <div class="introduce">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[0].name}}</div>
    </div>
    <div class="introduce1">
      <div v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="" v-if="goods.services[index-1].icon!=null">
        {{goods.services[index-1].name}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    newPrice(){
      const price=this.goods.newPrice
      return price.indexOf('~')!=-1?price.substring(0,price.indexOf('~')):price
    }
  }
}
</script>

<style scoped>
  .title1{
    font-size: 16px;
    font-weight: 500;
    color: black;
    padding: 4px;
    margin-top: 5px;
  }
  .price{
    display: flex;
    margin-top: 3px;
  }
  .price div{
    margin-left: 5px;
  }
  .newPrice{
    color:red;font-size: 22px;
  }
  .oldPrice{
    margin-top: 8px;
    font-size:14px;
    text-decoration:line-through
  }
  .discount{
    padding: 5px;
    height: 24px;
    text-align: center;
    line-height: 15px;
    font-size: 13px;
    background-color: var(--color-high-text);
    border-radius: 15px;
    margin-top: 2px;
    color: white;
  }
  .introduce
  {
    display: flex;
    font-size: 12px;
    padding: 5px;
    color: #a9a9a9;
    margin-top: 10px;
    padding:5px,6px;
    border-bottom: 5px solid rgb(245, 245, 245);
    justify-content: space-between;
  }
  .introduce div{
    padding:0px,2px
  }
  .introduce1{
    display:flex;
    font-size: 12px;
    width: 100%;
    padding: 20px 6px;
    justify-content: space-between;
    border-bottom: 5px solid #f5f5f5;
  }
  .introduce1 img{
    width: 10px;
  }
</style>
