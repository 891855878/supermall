<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:'',
      isShow:false
    }
  },
  methods: {
    show(message,dealy=2000){
      this.isShow=true
      this.message=message

      setTimeout(()=>{
        this.isShow=false
      },dealy)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top:50%; left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    background-color: rgba(0,0,0,.7);
    color: white;
    padding: 8px 10px;
    border-radius: 5px;
  }
</style>
