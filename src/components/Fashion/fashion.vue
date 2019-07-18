<template>
<div class="fashion">
 <carousel/>
 <command/>
</div>
</template>

<script>
  import carousel from "../Carousel/carousel.vue"
  import command from "../Command/command.vue"
    export default {
        name: "fashion",
        components:{
        carousel,
        command
      },
      data(){
          return{

          }
      },
      computed:{

      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
