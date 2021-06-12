<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
  }
  .recommendItem{
    flex: 1;

  }
  .recommend img{
    width:68px;
    height:68px;
    margin-bottom: 8px;

  }
</style>
