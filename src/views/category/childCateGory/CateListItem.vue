<template>
  <div class="cateitem">
    <img :src="show.image" alt="" @load="imageLoad">
    <div>{{show.title}}</div>
  </div>
</template>

<script>
export default {
  props:{
   show:{
      type:Object,
      default(){
      return {}
    }
   }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('imageLoad')
    }
  },

}
</script>

<style scoped>
  .cateitem{
    font-size: 14px;
    height: 90px;
  }
  .cateitem img{
    width: 60px;
  }
</style>
