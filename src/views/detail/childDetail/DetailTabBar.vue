<template>
  <div class="detailTabbar">
    <div class="tabbar-left">
      <div>
        <i class="service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="tabbar-right">
      <div class="shopping" @click="addShopping">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addShopping(){
      // console.log(1);
      this.$emit('addShopping')
    }
  }
}
</script>

<style>
  .detailTabbar{
    height: 49px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: white;
    display: flex;
  }
  .tabbar-left{
    flex: 1;
    display: flex;
    text-align: center;
    font-size: 13px;
  }
  .tabbar-right{
    flex: 1;
    /* background-color: black; */
    display: flex;
    font-size: 14px;
    text-align: center;
  }
  .tabbar-left>div
  {
    flex:1
  }
  .tabbar-left i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 2px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .service{
    background-position: 0 -53px !important;
  }
  .store{
     background-position: 0 -98px !important;
  }
  .shopping
  {
    flex: 1;
    line-height: 49px;
    background-color:#ffe817;
    color: black;
  }
  .buy{
    flex: 1;
    line-height: 49px;
    background-color: var(--color-tint);
    color: white;
  }
</style>
