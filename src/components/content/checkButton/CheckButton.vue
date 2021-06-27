<template>
  <div class="check-button" :class="{active:value}">
    <img src="~assets/img/cart/tick.svg" alt="">
    <!-- 123231 -->
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check-button{

    width: 21px;
    height: 21px;
    border-radius: 12px;
    line-height: 21px;
    text-align: center;
    border:2px solid #a9a9a9
  }
  .active{
    border-color: var(--color-tint);
    background-color: var(--color-tint);
  }
</style>
