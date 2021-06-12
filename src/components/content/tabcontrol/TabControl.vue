import TabControl from 'components/content/tabcontrol/TabControl.vue';
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:activeIndex==index}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
   titles:{
      type:Array,
    default(){
      return[]
    }
   }
  },data () {
    return {
      activeIndex:0
    }
  },
  methods: {
    tabClick(index){
      this.activeIndex=index
      this.$emit('tabControl', index)
    }
  }
}
</script>

<style>
  .tab-control
  {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding:4px
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
   border-bottom:3px solid  var(--color-high-text);
  }
</style>
