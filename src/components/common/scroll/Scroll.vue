<template>
  <div class="wrapper" ref="wrapper">
    <div class="content1">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
     probeType:{
       type:Number,
       default:0
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }

  },
  data () {
    return {
      scroll:null
    }
  },
  mounted () {
    this.scroll= new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)

    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')


    })
  },
  methods: {
    // 计算可滑动的高度
     refresh () {
      this.scroll.refresh();

    },
    //置顶
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    getSaveY(){
      return this.scroll ? this.scroll.y:0
    }
  }
}
</script>

<style scoped>

</style>
