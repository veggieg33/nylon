<template>
    <div class="header">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in headerNav">
            <a  class="nav-link" href="#">{{item.name}}</a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "header",
      data(){
          return{
            headerNav:[
              {id:1,name:"购物车"},
              {id:2,name:"登录"},
              {id:3,name:"注册"}
            ]
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
li{float:right;}
</style>
