<template>
  <div v-if="Object.keys(showGoods).length!==0" class="showGoods">
    <div class="describe">
      <div class="stare"></div>
      <div class="jies">{{showGoods.desc}}</div>
      <div class="end"></div>
      <div style="margin-top:20px">{{showGoods.detailImage[0].key}}</div>
    </div>
      <div v-for="item in showGoods.detailImage[0].list" class="imageGoods">
        <img :src="item" alt="" @load="imageLoad">
      </div>
  </div>

</template>

<script>

export default {
  props:{
    showGoods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      counter:0,
      detailInfo:0
    }
  },
  methods: {
    imageLoad(){
      if(++this.counter==this.detailInfo)
      {
        this.$emit('imageGoods')
      }
    }
  },
  watch: {
    showGoods(){
      this.detailInfo=this.showGoods.detailImage[0].list.length
      // console.log(this.showGoods.detailImage[0].list.length);
    }

  }
}
</script>

<style scoped>
  .showGoods{
    border-bottom: 4px solid #f5f5f5;
  }
  .describe{
    position: relative;
    padding: 5px 10px;
    padding-top: 15px;
  }
  .stare{
    width:100px;
    height: 5px;
    border-left: 5px solid black;
    border-bottom: 1px solid #a9a9a9;
    position: absolute;
  }
  .end{
    width:100px;
    height: 5px;
    border-right: 5px solid black;
    border-bottom: 1px solid #a9a9a9;
    position: absolute;
    right: 10px;
  }
  .jies
  {
    padding: 15px 0px;    font-size: 14px;
  }
  .imageGoods img{
    width: 100%;
  }
</style>
