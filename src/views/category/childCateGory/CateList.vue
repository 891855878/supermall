<template>
  <div class="shopShow">
    <cate-list-item v-for="(item,index) in shop":key="index" :show="item" class="item" />
  </div>
</template>

<script>
import CateListItem from './CateListItem.vue'
export default {
  props: {
    shop:{
      type:Array,
      dafault(){
        return []
      }
    }
  },
  components: {
    CateListItem
  }
}
</script>

<style scoped>
 .shopShow
  {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    width: 33%;
    text-align: center;
    float: left;
    margin-top: 10px;
  }
</style>
