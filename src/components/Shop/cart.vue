<template>
    <div class="cart">
      <table ref="table" v-if="cart.length">
        <tbody>
        <tr>
          <th class="th_chx">
            <div>
            <input type="checkbox" @change="selectAll" id="selectAll" v-model="isAll"/>
              <label for="selectAll">全选</label>
            </div>
          </th>
          <th class="th_item"></th>
          <th class="th_info">商品信息</th>
          <th class="th_price">单价</th>
          <th class="th_amount">数量</th>
          <th class="th_sum">金额</th>
          <th class="th_op">操作</th>
        </tr>
        <tr v-for="(single,index) in cart">
          <td class="td_chk">
            <input type="checkbox" v-model="single.completed" name="singleCheck">
          </td>
          <td class="td_item">
            <div>
              <img :src="single.src" alt="single.src">
              <p>{{single.title}}</p>
            </div>
          </td>
          <td class="td_info">
            <p>颜色：{{single.color}}<br/>尺寸：{{single.size}}</p>
          </td>
          <td class="td_price">
            ￥{{parseFloat(single.price).toFixed(2)}}
          </td>
          <td class="td_amount">
            <span @click="changeNumSub(index)" :class="{disabled:single.num<=1}">-</span>
            <span class="input_num">{{single.num}}</span>
            <span  @click="changeNumAdd(index)" :class="{disabled:single.num>=8}">+</span>
          </td>
          <td class="td_sum">
            ￥{{parseFloat(single.price * single.num).toFixed(2)}}
          </td>
          <td class="td_op">
            <span @click="remove(index)">删除</span>
          </td>
        </tr>
        </tbody>
        <div class="table_bottom">
          <p>已选<span>{{selectSum}}</span>件</p>
          <p>共计￥<span>{{totalSum}}</span></p>
          <button type="button" class="btn btn-primary">结算</button>
        </div>
      </table>
      <div v-if="!cart.length">
        <p class="cart_empty">您的购物车还没有添加东西哦</p>
      </div>

    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

    export default {
        name: "cart",
      data(){
          return{
            isSelectedAll:false,
            isAll:false,
          }
      },
      created(){
        this.cart.forEach(function(e){
          e.completed=false
        });
        this.$store.dispatch('changeShow','')
      },
      computed:{
        ...mapGetters({
          cart:"getCart"
        }),
        selectSum(){
          return this.cart.filter(function(e){
            return e.completed
          }).length
        },
       totalSum(){
         var floatMul=function(m,n,sum){
           var _m=m.split('.')
           var _n=n.split('.')
           var maxFloatNum=Math.max(parseInt(_m[1].length),parseInt(_n[1].length))
           console.log(maxFloatNum)
           var multiple=(parseFloat(m)*Math.pow(10,maxFloatNum)+parseFloat(n)*Math.pow(10,maxFloatNum))/Math.pow(10,maxFloatNum)
           return multiple.toFixed(sum)
         }
         var sum='0.00';
         this.cart.filter(function(e){
           return e.completed
         }).forEach(function(n){
           sum=floatMul(sum,parseFloat(n.num*n.price).toFixed(2),2)
         })
         return sum
        },
        isAll(){
          return this.cart.every(function(e){
            return e.completed
          })
        }
      },
      methods:{
          selectAll(){
            if(this.isAll){
              this.cart.forEach(function(e){
                e.completed =true
              })
            }else{
              this.cart.forEach(function(e){
                e.completed=false
              })
            }
          },
      changeNumSub(index){
        if(this.cart[index].num>1){
          this.$store.dispatch('changeNumSub',index)
        }
        
      },
      changeNumAdd(index){
        if(this.cart[index].num<8){
          this.$store.dispatch('changeNumAdd',index);
        } 
      },
      remove(index){
        this.$store.dispatch('remove',index)
      }
        
        


      }
    }
</script>

<style scoped>
  table{margin:0 auto; padding-bottom: 60px;position: relative;}
  tbody{width:1060px;display: block;margin:0;}
  tbody tr{border:1px solid #00BC9B;display:block;margin: 20px 0}
  tbody tr:first-child{border: none;}
  tbody td{height: 100px;display: inline-block;padding-top: 20px;}
  th{text-align: left;display: inline-block;padding-top: 20px;font-size: 12px;height: 40px;}
  label{font-size: 12px}
  .td_chk{width: 80px;}
  .td_chk input{display: inline-block;margin:0 10px;cursor: pointer;}
  .td_item{width: 300px;overflow: hidden;}
  .td_item img{width: 80px;height: 75px;}
  .td_item p{display: inline-block;width: 186px;font-size: 12px;overflow: hidden;    text-overflow: ellipsis;    max-height: 36px;    color: #3c3c3c;;vertical-align: top;margin-left: 5px;cursor: pointer;}
  .td_item p:hover{color:#00BC9B;text-decoration: underline;}
  .td_info{width: 170px;}
  .td_info p{color:#9c9c9c;font-size: 12px;}
  .td_price,.td_sum{width: 120px;color: #3c3c3c;font-weight: 700; font-family: Verdana,Tahoma,arial;font-size: 12px;}
    .td_amount{width: 120px}
    .td_sum{color:#00BC9B;}
    .td_op{width: 120px;}
    .td_op span{cursor: pointer;font-size: 12px;}
    .td_op span:hover{color:#00BC9B;text-decoration:none;}
  .th_chk{width: 80px;}
  .th_chk input{display: inline-block;margin:0 10px;cursor: pointer;}
  .th_item{width: 300px;}
  .th_info{width: 170px;}
  .th_price,.th_sum{width: 120px;}
  .th_amount{width: 120px}
  .th_op{width: 120px}
  .t_foot{border: 1px solid #00BC9B ;position: absolute;bottom: 3px;width:1060px;}
  .t_foot span{color:#00BC9B;}
  .t_foot p{display: inline-block;margin-right: 20px;width: 100px;text-align: center}
  .t_foot button{padding: 15px 30px;background:#00BC9B; border: none;cursor: pointer}
  .empty{width: 500px;height: 200px;font-size: 20px;text-align: center;border: 1px dashed #00BC9B;margin: 0 auto;padding-top: 100px}
  .disabled{color:#fff; cursor: not-allowed;background: #ededed;}
  
</style>
