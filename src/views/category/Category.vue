<template>
  <div class="cate">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <scroll class="scroll1" ref="scroll1"  :pull-up-load="true" :probe-type="3">
        <cate-left :list1="list" @load1="load1" @clickIndex="cateLeftClick"></cate-left>
      </scroll>
      <scroll class="scroll" ref="scroll2"  :pull-up-load="true" :probe-type="3"  >
        <cate-list :shop="shopShow"></cate-list>
      </scroll>
    </div>
  </div>

</template>

<script>


import NavBar from 'components/common/navbar/NavBar';
import CateLeft from './childCateGory/CateLeft.vue'
import CateList from './childCateGory/CateList.vue'
import {getCategory,getCategoryDetail,getSubcategory} from 'network/category.js'
import {itemImageMixin} from 'common/mixin.js'
import {debounce} from 'common/utils.js'

import Scroll from 'components/common/scroll/Scroll.vue';
export default {
  data () {
    return {
      list:[],
      shopShow:[],
      index:0,
      sum:0
    }
  },
  components: {
    Scroll,
    NavBar,
    CateLeft,
    CateList
  },
  // mixins: [itemImageMixin],
  mounted () {
    // console.log(this.$refs.scroll.scroll.scrollerHeight);

  },
  created(){
      this.$bus.$on('imageLoad',()=>{
        this.$refs.scroll2.refresh()
      })
      getCategory().then(res=>{
      this.list=res.data.category.list
       this._getSubcategory(this.maitKey)
    })
  },
  methods: {
    _getSubcategory(maitkey){
      getSubcategory(maitkey).then(res=>{
        console.log(res);
        this.shopShow=res.data.list
      })
    },
     load1(){
      this.$refs.scroll1.refresh();
    },
     load2(){
      this.$refs.scroll2.refresh();
    },
    cateLeftClick(index)
    {
      this.index=index
      console.log(this.index);
       this._getSubcategory(this.maitKey)
    },

  },
  computed: {
    maitKey(){
      return this.list.length>0?this.list[this.index].maitKey:0
    }
  }


}
</script>

<style scoped>
  .cate{
    height: 100vh;
    position: relative;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    position: relative;
    z-index: 99;
  }
  .content{
    width: 100%;

  }
  .scroll1{
    /* flex: 1; */
    width: 30%;
    margin-bottom: 5px;
    /* padding: 0px 3px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .scroll{
    width: 70%;
    position: absolute;
    right: 0px;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
