<template>
  <div class="params" v-if="Object.keys(goodsParams).length!==0" >
    <table class="params-size">
      <tr v-for="item in goodsParams.rule">
        <td v-for="item1 in item ">{{item1}}</td>
      </tr>
    </table>
    <table class="params-size">
      <tr v-for="item in goodsParams.into">
       <td style="width:30%">{{item.key}}</td>
       <td style="text-align:left; color:var(--color-tint)">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .params{
    padding-top: 5px;
  }
  .params-size{
    width: 95%;
    text-align: center;
    margin: auto;
    border-spacing: 0px;
    font-size: 13px;
    border-bottom: 4px solid #f5f5f5;
    margin-top: 20px;
  }
  .params-size td{
    border-bottom: 1px solid #f5f5f5;
    height:30px;
    line-height: 30px;
  }
  .params-size tr td:first-child{
    text-align: left;
  }
</style>
