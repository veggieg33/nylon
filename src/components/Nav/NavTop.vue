<template>
<div class="NavTop">
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <span class="nav-brand">NYLON</span>
    <ul class="navbar-nav">
      <li class="nav-item" v-for="item in navItems" @click="changeShow(item.name)">
        <router-link :to="'/'+item.name" class="nav-link">{{item.name.toUpperCase()}}</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
  import{mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "NavTop",
      data(){
          return{
            navItems:[
            
              {id:1,name:"fashion"},
              {id:2,name:"news"},
              {id:3,name:"shop"},
              {id:4,name:"collection"}
            ],
            navRights:[
              {id:1,name:"登录"},
              {id:2,name:"注册"}
            ]
          }
      },
      computed:{
        
      },
      methods:{
         changeShow(type){
         this.$router.dispatch("changeShow",type)
         }

      }
    }
</script>

<style scoped>

  .NavTop{border-bottom:0.5px solid #333;margin-bottom:2px;}
  .nav-link{font-size:20px;line-height:30px;}
  .nav-link:hover{font-size:25px;line-height:30px;}
  .nav-item{margin-left:5px;}
  span{font-size:25px;}
  a{font-size:20px;}
  a:hover{background:#999;}


</style>
