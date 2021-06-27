<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>

  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    data () {
      return {
        imLoad:false
      }
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
      imageLoad(){
       if(!this.imLoad)
       {
         this.$emit('imageLoad')
         this.imLoad=true
       }
      }
    }
	}
</script>

<style >

</style>
