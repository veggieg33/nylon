<template>
<div class="shopItem">
<div class="shopItem_img">
  <img :src="item.src" alt="item.name" >
</div>
  <div class="shopItem_info">
    <div class="item_top">
     <h3 class="shopItem_title">{{item.title}}</h3>
      <p>
      <label>描述：</label>
      <span class="shopItem_desc">{{item.description}}</span>
      </p>
    </div>
    <div class="item_bottom">
      <div>
      <label>价格：</label>
      <span class="shopItem_price">￥{{item.price}}</span>
      </div>
      <div>
      <label>尺寸：</label>
      <span class="shopItem_size" v-for="(size,index) in item.sizes" @click="changeSize(index)" :class="{isselected:item.size===size}">{{size}}</span>
      </div>
      <div>
      <label>颜色：</label>
      <span class="shopItem_color" v-for="(color,num) in item.colors" @click="changeColor(num)"
      :class="{isselected:item.color===color}">{{color}} </span>
      </div>


      <div>
        <label>数量：</label>
      <button type="button" class="btn" @click="sub" style="background-color:#00BC9B;">-</button>
        <span class="num">{{item.num}}</span>
        <button type="button" class="btn" @click="add" style="background-color:#00BC9B;">+</button>
      </div>
    </div>
    <div class="item_buy">
     <span class="addToCart_btn"  @click="addToCart" v-if="!!this.item.color&&!!this.item.size"><router-link to="/cart">加入购物车</router-link></span>
        <p class="addToCart_layout" v-if="!this.item.color||!this.item.size">加入购物车</p>
    </div>
  </div>

</div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "shopItem",
      data(){
          return{

          }
      },
      computed:{
        item:function(){
          var isEmptyObj=function(obj){
            for(var name in obj){
              return false
            }
            return true
          };//判断对象是否委空
          var clone = function(myObj){
            if(typeof(myObj) != 'object') return myObj;
            if(myObj == null) return myObj;
            var myNewObj = new Object();
            for(var i in myObj){
              myNewObj[i] = clone(myObj[i]);
            }
            return myNewObj;
          };
          var storageItem=clone(JSON.parse(sessionStorage.getItem('storageItem')));
          if(!isEmptyObj(this.$store.state.selectedItem)){
            return this.$store.state.selectedItem//item改变也会改变state中的selectedItem
          }else if(!isEmptyObj(storageItem)){
            this.$store.state.selectedItem=clone(storageItem);//把session里的数据赋给state中的selectedItem
            return this.$store.state.selectedItem
          }else{
            this.$store.state.selectedItem=clone(this.$store.state.goods[0]);
            return this.$store.state.selectedItem
          }
        }
      },
      methods:{
        ...mapMutations([

        ]),
        sub(){
          if(this.item.num>1){
            this.$store.dispatch('sub');
          }
        },
        add(){
          if(this.item.num<8){
            this.$store.dispatch('add');
          }
        },
        changeSize(index){
          this.$store.dispatch('changeSize',index);

        },
        changeColor(num){
          this.$store.dispatch('changeColor',num);

        },
        addToCart(){
          if(!!this.item.size&&!!this.item.color){
            this.$store.dispatch('addToCart');
          }

        }




      }
    }
</script>

<style scoped>
  .shopItem{width:1000px;margin:0 auto;padding-top:20px;}
  .shopItem:after{display:block;height:0;width:0;clear:both;}
  label{display: inline-block;color:#111;font-size: 16px;padding-right: 20px;line-height: 16px;vertical-align: top;}
  .shopItem_title{font-size:25px;}
  .shopItem_desc{font-size:12px;font-weight: 400;color:#666;display: inline-block;width: 470px;word-break: break-all;}
  .shopItem_img{float:left;width:400px;}
  img{width:380px;height:380px;border:none;}
  .shopItem_info{float:right;width:600px;padding-left:10px;}
  .shopItem_price{color:#666;}
  .shopItem_size{cursor: pointer;margin-right: 5px;display: inline-block;width: 40px;text-align: center;box-sizing: border-box;height: 24px;line-height: 20px;font-size: 16px;}
  .shopItem_size:hover{border:1px solid #00BC9B;}
  .shopItem_color{cursor:pointer;margin-right:5px;display:inline-block;width:40px;
  text-align:center;box-sizing:border-box;height:24px;line-height:20px;font-size:16px;}
  .shopItem_color:hover{border:1px solid #00BC9B;}
  .shopItem_color .isselected{border:1px solid #00BC9B;}
  .shopItem_size .isselected{border:1px solid #00BC9B;}
  .shopItem_color{display:inline-block;}
  .item_bottom div{border-bottom:1px solid #999;height:30px;margin:20px 0;}
  .item_bottom div:last-child{height:50px;}
  .addToCart_btn{display: inline-block;}
  .addToCart_btn a{display: inline-block;height: 50px;line-height: 50px;width: 150px;text-align: center;font-size:20px;background:#00BC9B;color:white;border-radius: 5px;cursor: pointer;}
  .addToCart_btn a:hover{text-align:none;}
  .addToCart_layout{width: 150px;height: 50px;z-index: 10;top:20px; cursor: not-allowed;background: #00BC9B;color:white;font-size:20px;text-align: center;line-height: 50px;border-radius: 5px;}

</style>
