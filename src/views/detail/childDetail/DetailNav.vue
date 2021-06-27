<template>
    <nar-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
      <div v-for="(item,index) in shu" class="title-item"
              :class="{active:currerIndex==index}"
              @click="tItemClick(index)">{{item}}</div>
      </div>
    </nar-bar>
</template>

<script>
import NarBar from 'components/common/navbar/NavBar';
export default {
  components: {
    NarBar
  },
  data () {
    return {
      shu:['商品','参数','评论','推荐'],
      currerIndex:0
    }
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    tItemClick(index){
      this.currerIndex=index
      this.$emit('navClick',index)
    }
  }

}
</script>

<style>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .back img{
    margin-top: 11px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
