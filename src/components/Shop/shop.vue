<template>
<div class="shop">
<ul class="shop_ul">
  <li class="shop_li" v-for="(good,index) in goods">
    <img :src="good.src" alt="good.name" class="shop_img" @click="changeSelectedItem">
    <div class="shop_info">
     <p @click="changeSelectedItem(index)">
              <router-link to="/shopItem" class="shop_title">{{good.title}}</router-link>
     </p>

      <span class="shop_price">￥{{good.price}}</span>
    </div>
  </li>
</ul>
</div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: "shop",
      data(){
          return{

          }
      },
      computed:mapGetters({
          goods:'getGoods'
      }),
      methods:{
        changeSelectedItem(index){
          this.$store.dispatch('changeSelectedItem',index)//进入相应商品页面
        }

      }

    }
</script>

<style scoped>
  .shop{margin:0 auto;padding-top:10px;width:1000px;}
  .shop:after{clear:both;width:0;height:0;display:block;}
  .shop_ul{}
  .shop_li{list-style-type:none;float:left;width:300px;border:1px solid #999;margin:10px;box-sizing:border-box;position:relative;}
  .shop_li:hover{box-shadow:2px 2px #999;}
  .shop_img{padding:10px;width:300px;}
  .shop_info{}
  .shop_title{display:block;width:300px;height:24px;line-height:24px;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:4px 0;color:#333;}
  .shop_title:hover{color:red;text-decoration:none;}
  .shop_price{float:right;padding-right:5px;padding-bottom:1%;}

</style>
