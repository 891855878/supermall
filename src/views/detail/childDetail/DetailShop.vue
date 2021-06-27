<template>
  <div class="detail-shop">
    <div class="Lname">
      <div class="logo">
        <img :src="shop.logo" alt="">
      </div>
      <div class="name">{{shop.name}}</div>
    </div>
    <div class="shopInfo">
      <div class="shop1">
        <div class="shop1_1">
          <span>{{shop.csells | SumSell }}</span><br>
          <span>总销量</span>
        </div>
        <div>
          <span>{{shop.cgoods}}</span><br>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop2">
        <div v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span class="score" :class="{scoreG:item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{betterG:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="intoShop">进入逛逛</div>
  </div>
</template>

<script>
export default {
  props: {
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  // 过滤器
  filters: {
    SumSell(value){
      if(value<10000)return value
      return (value/10000).toFixed(1)+'万'
    }
  }
}
</script>

<style scoped>
  .detail-shop{
    padding-bottom: 20px;  border-bottom: 5px solid #f5f5f5;;
  }
  .Lname{
    display: flex;
    margin-top: 15px; padding-bottom: 10px;
  }
  .logo{
    width: 50px; height: 50px; border-radius: 25px; border:1px solid #a9a9a9;
    overflow: hidden; margin-left: 10px;
  }
  .logo img
  {
    width: 100%; height: 100%;
  }
  .name{
    height: 50px; line-height: 50px; margin-left: 10px; font-size: 17px;
  }
  .shopInfo{
    padding: 10px 0 ; height: 50px;
  }
 .shop1{
    width: 50%; border-right: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    float: left;

  }
  .shop1 div{
    text-align: center; font-size: 14px; color: black;
  }
  .shop2{
    /* text-align: center; */
    font-size: 13px; color: black; line-height: 25px; float: left;
    margin-left:20px; margin-top: -20px; position: relative;
  }
  .shop2 span{
    margin-left: 5px;
  }
  .score
  {
    width: 30px; display: inline-block; color: green;
  }
  .scoreG
  {
    color: red !important;
  }
  .betterG{
    background-color:red !important;
  }
  .better{
    background-color: green; color: white;
  }
  .intoShop{
    clear: both;
    margin: auto;
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color:ghostwhite;
    font-size: 14px;
    border-radius: 10px;
    margin-top: 25px;
  }
</style>
