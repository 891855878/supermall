<template>
  <div id="home-nav">
    <nar-bar class="home">
      <div slot="center">购物街</div>
    </nar-bar>
   <home-swiper :banners="banners" ref="hSwiper"/>
   <recommend :recommend="recommend"/>
   <feature-view/>
   <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabControl="changeGoods"/>
   <goods :goodsList="goods[goodsType].list"  />
  </div>

</template>

<script>


import HomeSwiper from './child/HomeSwiper.vue'
import Recommend from './child/Recommend.vue'
import FeatureView from './child/FeatureView.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import Goods from 'components/content/goods/Goods.vue'

import NarBar from 'components/common/navbar/NavBar';
import {getHomeRequest,getHomeData} from 'network/home';
import { Swiper } from 'components/common/swiper/index';

export default {
 components: {
  HomeSwiper,
  Recommend,
  TabControl,
  NarBar,
  FeatureView,
  Goods
 },
 data () {
  return {
     banners:[],
     recommend:[],
     goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]},
     },
     goodsType:'pop'
   }
 },
 created(){
   this.getHomeRequest();
   this.getHomeData('pop')
   this.getHomeData('new')
   this.getHomeData('sell')
 },
 methods: {
   //事件监听
   changeGoods(index){
     switch(index)
     {
       case 0:
         this.goodsType='pop'
         break;
       case 1:
         this.goodsType='new'
         break;
       case 2:
         this.goodsType='sell'
         break
     }
   },



   // 网络请求数据
   getHomeRequest(){
    getHomeRequest().then(res=>{
    this.banners=res.data.banner.list
    this.recommend=res.data.recommend.list
   })
   },
   getHomeData(type){
     const page=this.goods[type].page+1;
    getHomeData(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1;
     })
   }
 }
}
</script>

<style>
  .home{
    background-color:var(--color-tint);
    color: white;
    position: fixed;
    z-index: 999;
    left: 0px; right: 0px; top:0px
  }
  #home-nav{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .tab-control{
    position: sticky;
    top:44px;
    z-index: 99;
    margin-bottom: 8px;
  }
</style>
