<template>
    <div class="command">
      <div class="command_img">
        <img src="/static/image/feature.PNG">
      </div>


      <div class="command_left">
        <ul class="command_ul">
          <li class="command_li">
            <div class="card" v-for="item in cardList">
              <img :src="item.src" :alt="item.name" class="cardImg">
              <div class="card-body">
                <a class="card-text" href="/news">{{item.text}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>



        <div class="command_right" >
          <h1>FEATURE</h1>
          <div class="command_content">
          <ul class="command_right_ul" >
            <li  v-for="brand in brands"  @click="changeShow(brand.name)">
              <router-link :to="'/news'" class="command_right_img" :src="brand.src" :alt="brand.name" tag="img"  ></router-link>
            </li>
          </ul>
        </div>
        </div>


      <transition name="introdution">
        <router-view></router-view>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "command",
      data(){
          return{
            brands:[
              {id:1,name:"picture1",src:"/static/image/feature1.jpg"},
              {id:2,name:"picture2",src:"/static/image/feature2.jpg"},
              {id:3,name:"picture3",src:"/static/image/feature3.jpg"},
              {id:4,name:"picture4",src:"/static/image/feature4.png"}
            ],
            navPills:[
              {id:1,name:"vogue1"},
              {id:2,name:"vogue2"},
              {id:3,name:"vogue3"},
              {id:4,name:"vogue4"}
            ],
            which_command:"apple",
            cardList:[
              {id:1,name:"card1",src:"/static/image/command1.png",text:"最酷枇杷COOL PEPOLE"},
              {id:2,name:"card2",src:"/static/image/command2.png",text:"他才18岁，却让整个时尚圈记住他"}
            ]


          }
      },
      methods: {

      }

    }
</script>

<style scoped>

   .command_nav a{color:black;}
   .command_nav a:hover{background:#DCDCDC;}
   .command_img img{margin:auto;display:block;}
   .command_right{height:400px;width:400px;margin:0;background:black;float:right;}
   .command_right:after{display:block;clear:both;width:0;height:0;}
  .command_right h1{font-size:32px;text-align:center;font-family: serif;padding:5px;color:white;}
  .command_right_ul {list-style-type: none;}
  .command_right_ul li{float:left; height:159px;width:159px;}
  .command_right_img
  {
    border:none;
    height:159px;
    width:159px;
    cursor:pointer;
    transition: all .5s ease;
    -moz-transition: all .5s ease;/* Firefox 4 */
    -webkit-transition: all .5s ease;	/* Safari 和 Chrome */
    -o-transition: all .5s ease;	/* Opera */
  }
  .command_right_ul li:first-child{padding:0 2px 2px 0}
  .command_right_ul li:nth-child(2){padding:0 0 2px 2px}
  .command_right_ul li:nth-child(3){padding:2px 2px 0 0}
  .command_right_ul li:nth-child(4){padding:2px 0 0 2px}
  .command_right_img:hover
  {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);		/* IE 9 */
    -webkit-transform: rotate(360deg);	/* Safari and Chrome */
    -o-transform: rotate(360deg);		/* Opera */
    -moz-transform: rotate(360deg);
  }

  .command_left{margin-left:100px;margin-bottom:20px;}
  .command_left:after{display:block;width:0;height:0;clear:both;}
  .command_ul{list-style-type:none;}
  .command_li .card{float:left;width:300px;height:400px;position: relative;box-sizing:border-box;margin-right:60px;}
  .card:hover{box-shadow:3px 3px 3px #C0C0C0;}
  .cardImg{width:100%;height:auto;padding:10px;}
  .card-text{color:black;font-family:serif;font-size:18px;}
  .card-text:hover{color:red;text-decoration: none;}


</style>
