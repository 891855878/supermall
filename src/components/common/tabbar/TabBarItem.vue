<template>
    <div class="tab-bar-item"  @click="activeClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      // isActive:false
    }
  },
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    activeClick(){

      // console.log(this.path)
      // console.log(this.$route.path)
      if(this.$route.path.indexOf(this.path)==-1)
      {
          this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    activeStyle(){
      return this.isActive ?{color:this.activeColor}:{}
    }
  }
}


</script>

<style>
 .tab-bar-item
  {
    flex: 1; height: 49px; text-align: center; font-size: 14px;
  }
  .tab-bar-item img
  {
    width:25px; height: 25px;vertical-align: middle; margin-top: 3px; margin-bottom: 1px;
  }
</style>
