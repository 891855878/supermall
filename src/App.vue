<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view ></router-view>
    </keep-alive>
    <main-tab-bar class="tabbar"></main-tab-bar>
  </div>
</template>

<script>
 import mainTabBar from 'components/content/mainTabBar/mainTabbar.vue';
export default {
  name: 'App',
  components: {
    mainTabBar
  }
}

</script>

<style scoped>
@import "assets/css/base.css";
.tabbar{
  z-index: 9;
}
</style>
