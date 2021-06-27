<template>
    <div class="cateleft">
      <div v-for="(item,index) in list1" @click="listClick(index)" :class="{active:activeindex==index}">
        {{item.title}}
      </div>
    </div>
</template>

<script>

export default {
  props: {
    list1:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      activeindex:0
    }
  },
    watch: {
    list1(){
      // this.$refs.scroll1.refresh();
      // console.log(1);\
      this.$nextTick(function () {
        this.$emit('load1');
      });
    }

  },
  methods: {
    listClick(index){
      this.activeindex=index
      this.$emit('clickIndex', index);
    },
    load1(){
      console.log(1);
    }
  }
}
</script>

<style scoped>
  .cateleft{
    /* width: 100%; */
    height: 100%;
    padding: 10px 0px;
    /* background-color:#f5f5f5; */
  }
  .cateleft div{
    text-align: center;
    height: 50px;
    font-size: 14px;
    line-height: 50px;
  }
  .active{
    border-left: 5px solid var(--color-high-text);
    font-size: 18px !important;
    color: var(--color-high-text);
    background-color: white;
  }
</style>
