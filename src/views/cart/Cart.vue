<template>
  <!-- <h2>购物车</h2> -->
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{shoplength}})</div>
    </nav-bar>
    <scroll class="score" :pullUpLoad="true" :probe-type="3" ref="scroll">

      <cart-list></cart-list>
      <!-- <div>{{this.$refs.score.scoreHeight}}</div> -->
    </scroll>
    <cart-button-bar class="cartbutton" v-if="shoplength>0"></cart-button-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll.vue';
import CartList from './childCart/CartList.vue'
import CartButtonBar from './childCart/CartButtonBar.vue'

import {debounce} from 'common/utils.js'

import{mapGetters} from 'vuex'

export default {

  components: {
    NavBar,
    Scroll,
    CartList,
    CartButtonBar
  },
  computed: {
    ...mapGetters(['shoplength'])
  },
  mounted () {
    console.log();
  },
  activated () {
    this.$refs.scroll.refresh()
    // console.log( this.$refs.scroll.$el.scrollHeight);
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
    position: relative;
  }
  .navbar{
    background-color: var(--color-tint);
    color: white;
    position: relative;
    z-index: 99;
  }
  .score{
    position: absolute;
    top:44px; bottom: 89px;
    left: 0px; right: 0px;
  }
</style>
