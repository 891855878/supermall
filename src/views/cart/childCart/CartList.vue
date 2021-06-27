<template>
  <div class="list">
    <div v-if="shopList.length!=0">
       <cart-list-item v-for="(item,index) in shopList" :key="index" :product="item"></cart-list-item>
    </div>
    <div v-else class="wu">
      暂无商品
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  computed: {
    ...mapGetters(['shopList'])
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
  }
  .wu{
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
  }
</style>
