<template>
  <div class="detail">
    <detail-nav class="detail-nav" @navClick="navClick" ref="nav"></detail-nav>
    <scroll ref="scroll"
            class="scroll"
            :pullUpLoad=true
            :probeType='3'
            @scroll="contentScroll">
      <detail-swiper :goods="swiperD" @imageLoad="imageLoad"></detail-swiper>
      <detail-base :goods="goods"></detail-base>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods :show-goods="showGoods" @imageGoods="imageLoad1" />
      <detail-params :goods-params="goodsParams" ref="params"/>
      <detail-commend :commendInfo="commendInfo" ref="commend"/>
      <goods :goods-list="recommend" ref="goods"/>
      <!-- <div>{{$store.state.shoppings}}</div> -->
    </scroll>
    <detail-tar-bar  @addShopping="addCart"/>
    <back-top @click.native="btnClick" v-show="isShowBackTop" />
    <toast ref="toast"></toast>
  </div>
</template>

<script>
import DetailNav from './childDetail/DetailNav.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBase from './childDetail/DetailBase.vue'
import DetailShop from './childDetail/DetailShop.vue'
import DetailGoods from './childDetail/DetailGoods.vue'
import DetailParams from './childDetail/DetailParams.vue'
import DetailCommend from './childDetail/DetailCommend.vue'
import Goods from 'components/content/goods/Goods.vue'
import DetailTarBar from './childDetail/DetailTabBar.vue'

import {detailGoods,goods,shop,goodsParams,recommend} from 'network/detail.js'
import Scroll from 'components/common/scroll/Scroll.vue';
import {itemImageMixin,backTop} from 'common/mixin.js'
import { debounce } from 'common/utils.js';
import Toast from 'components/common/toast/Toast.vue';
export default {
  name:'Detail',
  data () {
    return {
      iid:null,
      swiperD:[],
      goods:{},
      shop:{},
      showGoods:{},
      goodsParams:{},
      commendInfo:{},
      recommend:[],
      themeTopY:[],
      getThemeTopY:null,
      imageL:null,
      currIndex:0,
    }
  },

  created () {
    // console.log(this.$route.query.iid);
    this.iid=this.$route.query.iid
    detailGoods(this.iid).then(res=>{
      // console.log(res)
      this.swiperD=res.result.itemInfo.topImages;
      const data=res.result
      this.goods=new goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop=new shop(data.shopInfo)
      this.showGoods=data.detailInfo
      this.goodsParams=new goodsParams(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate!=0)
      {
        this.commendInfo=data.rate.list[0]
      }

      this.getThemeTopY=debounce(()=>{
        this.themeTopY=[]
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.commend.$el.offsetTop)
        this.themeTopY.push(this.$refs.goods.$el.offsetTop)
        this.themeTopY.push(Number.MAX_VALUE)
        // console.log(this.themeTopY);
        // console.log(this.$refs.params.$el);
    },100)
    })
    recommend().then(res=>{
     this.recommend=res.data.list
    //  console.log(typeof(this.recommend));
    }),

    // 图片加载防抖
    this.imageL=debounce(()=>{
      this.$refs.scroll.refresh()
    },100)
    //
  },
    components: {
    DetailNav,
    DetailSwiper,
    DetailBase,
    Scroll,
    DetailShop,
    DetailGoods,
    DetailParams,
    DetailCommend,
    Goods,
    DetailTarBar,
    Toast
  },
  mixins: [itemImageMixin,backTop],
  mounted () {
  },
  methods: {
    imageLoad(){
      this.imageL()
      this.getThemeTopY()

    },
    imageLoad1(){
      this.imageL()
      this.getThemeTopY()
      console.log('加载完毕');

    },
    navClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],300)
      // console.log(-this.themeTopY[index]);
    },
    contentScroll(position){
      let positionY=-position.y
      // console.log(positionY);
      let length=this.themeTopY.length
      for(let i=0;i<length;i++){
      //  console.log(i);
      //  this.themeTopY[i]
       if(this.currIndex!=i&&(positionY>=this.themeTopY[i]&&positionY<this.themeTopY[i+1]))
       {
          this.currIndex=i
          // console.log(this.currIndex);
          this.$refs.nav.currerIndex=this.currIndex

       }
    }
    this.isShowBackTop=(-position.y)>1000
    // for(let i in this.themeTopY)
    // {
    //    if(this.currIndex!=i&&((i<length-1&&positionY>=this.themeTopY[parseInt(i)]&&positionY<this.themeTopY[parseInt(i)+1])||
    //    (i==length-1&&positionY>=this.themeTopY[parseInt(i)])))
    //    {

    //       this.currIndex=i
    //       // console.log(this.currIndex);
    //       this.$refs.nav.currerIndex=this.currIndex

    //    }
    // }

  },
  // 添加购物测
  addCart(){
    // console.log('添加购物车');
    const shopping={}
    shopping.image=this.swiperD[0]
    shopping.title=this.goods.title
    shopping.desc=this.showGoods.desc
    shopping.price=this.goods.newPrice
    shopping.iid=this.iid
    shopping.count=1
    shopping.lowPrice=this.goods.lowPrice

    // console.log(shopping.count);
    this.$store.dispatch('addShop',shopping).then(res=>{
      // console.log(res);

      // this.$refs.toast.show(res,2000)
      this.$toast.show(res,2000)

      // console.log(this.$toast.isShow);
      // console.log();
    })
    // for(let i of this.$store.state.shoppings )
    // {
    //   console.log(i.iid+':'+i.count)
    // }



  },
  destroyed () {
    this.$bus.$off('itemImageLoad',this.itemImageLoad)
  },
}
}
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
    z-index: 10;
    background-color: white;
  }
  .detail-nav{
    position: relative;
    z-index: 99;
    background-color: white;
  }
  .scroll{
    position: absolute;
    left:0px; right: 0px;
    top: 44px; bottom: 49px;
  }

</style>
