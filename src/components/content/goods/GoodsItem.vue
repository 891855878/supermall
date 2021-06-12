<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt="">
    <div class="jiesao">
    <div class="title">{{goodsitem.title}}</div>
    <div class="jies"><span class="price">{{goodsitem.price}}</span><span class="price1">{{goodsitem.cfav}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .goods-item{
    width:100%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .title{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /* .jies
  {
    width: 100%;
    text-align: center;
  } */
  .jiesao
  {
    text-align: center;
    font-size: 12px;
    position: absolute;
    left: 0px; right: 0px;
    bottom: 8px;
  }
  .price{
    margin-right: 20px;
    color:red;
  }
  .price1{
    position: relative;
  }
  .price1::before{
    content: '';
    position: absolute;
    width: 14px; height: 14px;
    left: -14px; top: -0.5px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }

</style>
