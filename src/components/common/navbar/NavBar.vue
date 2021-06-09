<template>
  <div class="navbar">
    <!-- 导航具名插槽 -->
    <div class="left"> <slot name="left"></slot></div>
    <div class="center"> <slot name="center"></slot></div>
    <div class="right"> <slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .navbar
  {
    display: flex; height: 44px; line-height: 44px; text-align: center;
    box-shadow: 0 -3px 8px black
  }
  .left,.right{
    width:60px;
  }
  .center{
    flex: 1;
  }
</style>
