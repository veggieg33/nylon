<template>
    <div class="news">
      <ul class="news_ul">
        <li class="news_li" v-for="content in contents">
          <router-link :to="'/newsItem'" :src="content.src" :alt="content.name" tag="img" class="news_img" ></router-link>
          <p class="news_title">{{content.title}}</p>
          <p class="news_date">{{content.date}}</p>
        </li>
      </ul>

    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "news",
      data(){
          return{

          }
      },
      created(){
          this.$store.dispatch('changeShow','news')
      },
      computed:{
        ...mapGetters({
          contents:"getNews"
        })
      }

    }
</script>

<style scoped>
  .news{padding-top:10px;}
  .news_ul{width:1000px;margin:0 auto;}
  .news_li{display:inline-block;border:1px solid #ccc;width:220px;height:240px;margin:10px;box-sizing:border-box;vertical-align:top;}
 .news_img{max-width:100%;height:auto;cursor:pointer;}
  .news_title{word-wrap: break-word;word-break: break-all;color: #111;font-size: 16px;font-weight: bold;margin: 16px 2px;display: inline-block;line-height: 20px;height: 40px;}
 .news_title:hover{color:red;}
  .news_date{white-space: nowrap; line-height: 16px;font-size: 14px;color:#999;text-align: left;padding-bottom: 5px;margin-bottom: 0;}
  p{font-family:serif;}
</style>
