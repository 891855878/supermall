
<template>
  <div class="cart-item">
    <div class="choose">
      <!-- <img src="~assets/img/cart/tick.svg" alt="">
       -->
        <check-button @click.native="active" :value="product.check"></check-button>
    </div>

    <div class="shopinfo">
      <div class="image">
        <img :src="product.image" alt="" >
      </div>
      <div class="introduce">
        <div class="title">
          {{product.title}}
        </div>
        <div class="desc">
          {{product.desc}}

        </div>
        <div class="price">
          <span style="color:orange">{{newPrice}}</span>
          <span class="count">X{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
export default {
  data () {
    return {
      value:false
    }
  },
  components: {
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
     newPrice(){
      const price=this.product.price
      // console.log(price);
      return price.indexOf('~')!=-1?price.substring(0,price.indexOf('~')):price
      // return price
    }
  },
  methods: {
    active(){
      this.product.check=!this.product.check
    }
  }

}
</script>

<style scoped>
  .cart-item{
    height: 120px;
    width: 100%;
    border-bottom:3px solid #f5f5f5;
    display: flex;
    align-items: center;
  }
  .choose{
    width: 20px;
    /* height: 20px;
    border:2px solid #a9a9a9;
    border-radius: 10px;
    margin-left: 3px;
    background-color: red; */
  }
  .shopinfo{
    height: 88%;
    width: 91%;
    margin-left: 3px;
    display: flex;
  }
  .image{
    width: 75px;
    /* border: 1px solid red; */
  }
  .image img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .introduce{
    flex: 1;
    position: relative;
  }
  .title,.desc{
    display: block;
    width: 200px;
    margin: auto;
    overflow: hidden;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;


  }
  .desc{
    margin-top:10px;
    font-size: 12px;
  }
  .price{
    position: absolute;
    bottom: 0px;
    left:10px;
    right: 0px;
  }
  .count{
    position: absolute;
    right: 10px;
  }

</style>
