<template>
  <div id="home-nav">
    <nar-bar class="home">
      <div slot="center">购物街</div>
    </nar-bar>
   <home-swiper :banners="banners" ref="hSwiper"></home-swiper>

  </div>

</template>

<script>
import NarBar from 'components/common/navbar/NavBar';
import HomeSwiper from './child/HomeSwiper.vue'

import {getHomeRequest} from 'network/home';
export default {
 components: {
  NarBar,
  HomeSwiper
 },
 data () {
   return {
     banners:[],
   }
 },
 created(){
   getHomeRequest().then(res=>{
     this.banners=res.data.banner.list
   })
 }
}
</script>

<style>
  .home{
    background-color:var(--color-tint);
    color: white;
  }
</style>
