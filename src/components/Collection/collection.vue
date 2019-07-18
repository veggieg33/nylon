<template>
    <div class="collection">
      <div  v-for="i in 25">
        <img :src="'/static/image/'+i+'.jpg'"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "collection",
      data(){
          return{

          }
      },
      created(){
        this.$store.dispatch('changeShow','collection');
      }
    }
</script>

<style scoped>
  .collection{width:1000px;column-count: 4;-moz-column-count: 4;-webkit-column-count: 4;margin: 20px auto}
  .collection div{padding-bottom:15px;}

</style>
