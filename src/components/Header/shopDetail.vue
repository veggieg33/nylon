<template>
  <div class="shopDetail">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-10">
          <div class="row">
          <div class="col-md-4">
            <div class="detail_left">
              <img src="/static/image/card1.jpg" alt="商品图片" class="detail_image">
            </div>
          </div>
          <div class="col-md-6">
            <div class="goods_info">
              <h3>{{item.title}}</h3>
              <p><span class="goods_desc">{{item.desc}}</span></p>
              <div class="goods_buy">
                <label>颜色：</label>
                <span class="goods_color" v-for="item in goods.colors">{{item.color}}</span><br/>
                <label>尺寸：</label>
                <span class="goods_size" v-for="item in goods.sizes">{{item.size}}</span>
              </div>
              <div class="goods_num">
                  <label>数量：</label>
                  <span class="subtract" @click="decrease">-</span>
                  <input type="text" class="goods_count" :value="count"/>
                  <span class="add" @click="increase">+</span>
              </div>
              <div class="goToBuy">
                <button type="button" class="btn btn-primary" @click="addToCart">加入购物车</button>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="col-md-2"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import{mapState,mapGetters,mapMutations,mapActions}from'vuex'
    export default {
        name: "shopDetail",
      data(){
          return{
            goods:[
              {
                src:'/static/images/card1.jpg',
                title:'SSUR Plus 16秋冬新款 背后大字母 喷染 卫衣 帽衫 情侣',
                shopsSrc:'../static/images/shops_2.jpg',
                shopsName:'QW',
                price:698,
                isLike:true,
                likes:5,
                flag:false,
                num:1,
                description:'大家都喜欢吃披萨，当然喵星人也不例外，萌猫躲在披萨里头仿佛在向主人抗议，简直萌化了。这件Stay gold 三色贪吃猫披萨卫衣正面采用刺绣工艺，完美呈现披萨拉丝效果，而且采用10支350克加绒面料，兼具舒适性和保暖性。',
                sizes:['S','M','L','XL'],
                size:'',
                colors:['黑色','白色','红色','灰色'],
                color:'',
                completed:false//用来检测购物车中是否选中
              }
              ]
          }

      },
      computed:{
        ...mapState([
          'count'

        ]),
        ...mapGetters([

        ])
      },
      methods:{
        ...mapMutations([
          'decrease',
          'increase'
        ]),
        ...mapActions([

        ])

      }
    }
</script>

<style scoped>
  .subtract{display: inline-block;height: 25px;width: 25px;line-height: 25px;text-align: center;background: #ccc;cursor: pointer;font-weight: bold;font-size: 20px;color: black}
  .add{display: inline-block;height: 25px;width: 25px;line-height: 25px;text-align: center;background: #ccc;cursor: pointer;font-weight: bold;font-size: 20px;color:black;}
  .goods_count{display: inline-block;width: 25px;height: 22px;vertical-align: top;}
</style>
