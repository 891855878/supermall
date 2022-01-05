<template>
  <div>
    <nar-bar class="profile">
      <div slot="center">我的</div>
    </nar-bar>
    <h2>我的</h2>
  </div>
</template>

<script>
import NarBar from 'components/common/navbar/NavBar';
export default {
  name:'Profile',
  components:{
    NarBar
  }

}
</script>

<style scoped>
  .profile{
    background-color:var(--color-tint);
    color: white;
  }
</style>
