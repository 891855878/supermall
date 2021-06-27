<template>
  <div class="commend" v-if="Object.keys(commendInfo).length!=0">
    <div class="commend-top">
      <div>用户评论</div>
      <div class="more">更多</div>
    </div>
    <div class="commendUser">
      <div class="logo">
        <img :src="commendInfo.user.avatar" alt="">
      </div>
      <div class="name">{{commendInfo.user.uname}}</div>
      <p>{{commendInfo.content}}</p>
    </div>
    <div class="time">
      <span>{{commendInfo.created | timeFormat}}</span>
      <span style="margin-left:12px">{{commendInfo.style}}</span><br>
      <span v-for="item in commendInfo.images" class="image1">
        <img :src="item" alt="">
      </span>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  props:{
    commendInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    timeFormat(value){
      const time1=new Date(value*1000)
      return formatDate(time1,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .commend{
    /* margin-top: 15px; */
    padding-top: 15px;
    border-bottom: 3px solid #f5f5f5;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .commend-top{
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: black;
    border-bottom: 3px solid #f5f5f5;
    padding-bottom: 15px;
  }
  .more{
    font-size: 14px;
  }
  .commendUser{
    width: 94%;
    margin: auto;
    margin-top: 10px;
  }
  .logo{
    width: 40px; height: 40px; border-radius: 20px;
    border:1px solid #a9a9A9;
    overflow: hidden;
    float: left;
  }
  .logo img{
    width:100%;
  }
  .name{
    height: 40px; line-height: 40px; margin-left: 10px; color: #000;
    float: left;
  }
  p{
    clear: both;
    font-size: 14px;
    padding-top: 10px;
  }
  .time{
    width: 95%;
    margin:auto;
    margin-top: 5px;
    font-size: 13px;
  }
  .image1 {
    display: inline-block;
    margin-top: 10px;
    margin-right: 5px;
  }
  .image1 img{
    width: 80px;
    height: 80px;
  }
</style>
