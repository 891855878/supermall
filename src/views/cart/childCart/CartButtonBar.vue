<template>
  <div class="tabButton ignore">
    <div class="checkd ignore" @click="checkButton" >
      <check-button :value="checkActive"></check-button>
      <div style="margin-left:5px">全选</div>
    </div>
    <div class="sum ignore">
      总计：{{sumPrice}}
    </div>
    <div class="settlement ignore" @click="buttonClick">
      去结算({{sunCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import { mapGetters } from 'vuex';
export default {
  components: {
    CheckButton,
  },
  data () {
    return {
      checkValue:true
    }
  },
  computed: {
    ...mapGetters(['shopList']),
    sumPrice(){
      return '￥'+this.shopList.filter(item=>{
        return item.check
      }).reduce((firstvalue,item)=>{
        return item.lowPrice*item.count+firstvalue
      },0).toFixed(2)
    },
    sunCount(){
      return this.shopList.filter(item=>{
        return item.check
      }).length
    },
    checkActive(){
      const length=this.shopList.length
      return this.checkValue=this.shopList.filter(item=>{return item.check}).length!=length?false:true
    }
  },
  methods: {
    checkButton(){
      // console.log(123);
      this.checkValue=!this.checkValue
      for(let item of this.shopList)
      {
        item.check=this.checkValue
      }
      },
    buttonClick(){
      this.shopList.filter(item=>{return item.check}).length!=0?
      this.$toast.show('结算,金额:'+this.sumPrice):this.$toast.show('请选择购买商品')
    }
  }

}
</script>

<style scoped>
  .tabButton{
    height: 40px;
    background-color: #eee;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 49px;
    left: 0px; right: 0px;
  }
  .checkd{
    width: 70px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .sum{
    flex: 1;
    text-align: center;
  }
  .settlement{
    width: 90px;
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: white;
    background-color: var(--color-tint);
  }
</style>
