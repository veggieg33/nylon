<template>
<div class="Home">
   <div class="logo_after_header">
        <img src="/static/image/logo.PNG" class="logo_img"/>
    </div>
    <NavTop/>
   <transition name="production">
      <router-view></router-view>
    </transition>

</div>
</template>

<script>

  import NavTop from "./Nav/NavTop.vue"

    export default {
        name: "Home",
      components:{
           NavTop
      }
    }
</script>

<style scoped>
  img{display:block;margin:auto;}
</style>
