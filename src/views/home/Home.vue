<template>
  <div id="home-nav">
    <nar-bar class="home">
      <div slot="center">购物街</div>
    </nar-bar>
    <tab-control ref="tabControl1" :titles="['流行','新款','精选']"
                  @tabControl="changeGoods"
                  class="tab2" v-show="isTab"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="scroll"
            :pull-up-load="true"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" ref="hSwiper" @imageLoad="imageLoad"/>
      <recommend :recommend="recommend"/>
      <feature-view/>
      <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabControl="changeGoods"/>
      <goods :goodsList="goods[goodsType].list" />
    </scroll>
    <back-top @click.native="btnClick" v-show="isShowBackTop" />
  </div>

</template>

<script>
import HomeSwiper from './childHome/HomeSwiper.vue'
import Recommend from './childHome/Recommend.vue'
import FeatureView from './childHome/FeatureView.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import Goods from 'components/content/goods/Goods.vue'
import Scroll from 'components/common/scroll/Scroll.vue';
import NarBar from 'components/common/navbar/NavBar';
import {getHomeRequest,getHomeData} from 'network/home';
import { Swiper } from 'components/common/swiper/index';

import {debounce} from 'common/utils.js'
import {itemImageMixin,backTop} from 'common/mixin.js'



export default {
  components: {
  HomeSwiper,
  Recommend,
  TabControl,
  NarBar,
  FeatureView,
  Goods,
  Scroll,
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
     goodsType:'pop',
     tabOffsetTop:0,
     isTab:false,
     saveY:0
   }
 },
//  混入
 mixins: [itemImageMixin,backTop],
 //进来时
 activated () {
  this.$refs.scroll.scrollTo(0,this.saveY,0)
  // this.$refs.scroll.refresh()
  this.itemImageLoad()
 },
 //出去
 deactivated () {
   this.saveY=this.$refs.scroll.getSaveY();
   this.$bus.$off('itemImageLoad',this.itemImageLoad)
 },
 created(){
   this.getHomeRequest();
   this.getHomeData('pop')
   this.getHomeData('new')
   this.getHomeData('sell')

 },
 mounted () {
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
     this.$refs.tabControl1.activeIndex=index
     this.$refs.tabControl2.activeIndex=index
   },

   scroll(position){
    //  置顶按钮
     this.isShowBackTop=(-position.y)>1000
    //  this.istab=(-position.y)>538
    // console.log(-position.y);
    // 分类导航
    this.isTab=(-position.y)>this.tabOffsetTop
   },
   pullingUp(){
     this.getHomeData(this.goodsType)
   },
   imageLoad(){
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
  },
   // 网络请求数据
   getHomeRequest(){
    getHomeRequest().then(res=>{
    this.banners=res.data.banner.list
    this.recommend=res.data.recommend.list
   })
   },
  //  请求商品数据添加到数组
   getHomeData(type){
     const page=this.goods[type].page+1;
    getHomeData(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1;

      // 完成上拉加载更多
      this.$refs.scroll.finishPullUp();
     })

   }
 }
}

</script>

<style scoped>
  .home{
    background-color:var(--color-tint);
    color: white;
    position: relative;
    z-index: 99;
  }
  #home-nav{
    position: relative;
    height: 100vh;
  }
  .tabcontrol{
    position: fixed;
    top:500px;
    z-index: 9;
    margin-bottom: 8px;
  }
  .content{
    position: absolute;
    top: 44px; bottom: 49px;
  }
  .tab2{
    position: relative;
    z-index: 99;
  }
</style>
