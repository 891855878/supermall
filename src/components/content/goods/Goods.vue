<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goodsList" :key="index" :goodsitem="item" class="goodsitem"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
import Goods from 'components/content/goods/Goods.vue';
export default {
  components: {
      GoodsItem
    },
  props:{
    goodsList:{
      type:Array,
      default () {
        return []
      }
    },
  },
}
</script>

<style  scoped>
  .goods{
    display: flex;
    /* flex布局后不在一行显示 */
    flex-wrap:wrap;
    justify-content: space-around;
    width: 100%;
    /* white-space: warp; */

  }
  .goodsitem{
    width:48%
  }
</style>
