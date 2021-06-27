<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in goods" :key="index">
      <img :src="item" alt="" @load="imageLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index';
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imageLoad(){
      this.$emit('imageLoad')
    }
  }
}
</script>

<style>
  .detail-swiper{
    height: 300px;
  }
</style>
