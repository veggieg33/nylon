<template>
    <div class="newsItem">
      <div class="newsItem_left">
        <div class="newsItem_top">
        <h1 class="newsItem_title">牛仔风的假日，美好而感性</h1>
        <p class="newsItem_info">
         <span class="top_info">编辑：</span> Larine
          <span class="top_info">来源：</span>CFP视觉中国
          <span class="top_info">
          时间：2019年3月19日
          </span>
        </p>
        </div>
        <div class="article_top">
          <span >文章导读</span>
          <p class="top_read">很多人认为牛仔元素是最普遍不过的单品，但其实，穿好穿对牛仔元素，
            才能马上变得时髦起来。在度假的元素里，牛仔风才是最容易被忽视，但是出片率极高的一种风格。
            今天就来看看怎么样才能穿出牛仔风该有的样子吧！ </p>
        </div>
        <div class="newsItem_content">
          <p>唐嫣的牛仔套装十分有看点，虽然看似是最基本的款式，
            但是融合了垮肩，廓形，拉丝之后，这身牛仔套装显得更加有立体感。</p>
          <img src="/static/image/article1.jpg">
          <img src="/static/image/article2.jpg">
          <p>奚梦瑶的短款牛仔套装更是秀足了好身材。翻领设计的牛仔裙作为点睛之笔让牛仔风不再是中性feel，
            而是增添了很多俏皮和活泼的风格， 并且翻领的裙围有很好的收腰效果，有小肚子的女孩子赶快穿起来。</p>
          <img src="/static/image/article3.jpg">
          <img src="/static/image/article4.jpg">
          <p>张天爱的牛仔套装非常惹眼，配上白色的内搭让整体造型十分有吸引力。帅气和性感同时兼备，怎么拍都好看。</p>
          <img src="/static/image/article5.jpg">
          <img src="/static/image/article6.jpg">
         <p>小花杨紫的“硬核”牛仔套装很有音乐感，加上印章和多排扣就会更有鬼马精灵的感觉，而且多排扣也能很好的调整身材比例。</p>
          <img src="/static/image/article7.jpg">
          <p>小小个的邓紫棋在穿了牛仔风的套装之后身材比例被修饰得不要太好，而且热裤配上阔型的牛仔夹克更加能够修饰身材比例。</p>
          <img src="/static/image/article8.jpg">
          <p>牛仔元素不仅仅只有牛仔裤可以体现，首先牛仔风的套装就非常时髦，而且任何颜色的内搭都能驾驭。</p>
          <img src="/static/image/article9.jpg">
          <p>而且牛仔套装对鞋子的款型也不挑，穿高跟鞋就是霸气干练，穿球鞋就是俏皮活泼，甚至穿穆勒鞋也有街头感。</p>
          <img src="/static/image/article10.jpg">
        </div>
      </div>


      <div class="newsItem_right">
        <div class="rank_top">
          <span id="top1">排行&nbsp;&nbsp;</span><span id="top2">TOP10</span>
        </div>
        <div class="rank_list">
          <ul class="rank_ul">
            <li class="rank_li" v-for="item in rankList">
              <span class="rank_index">{{item.id}}</span>
              <a class="rank_title">{{item.title}}</a>
            </li>
          </ul>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "newsItem",
      data(){
          return{
            rankList:[
              {id:1,title:"最吸睛，夏日里的一抹白"},
              {id:2,title:"樱花季，想拥有樱花肌吗"},
              {id:3,title:"这些衣服颜色hold不住？"},
              {id:4,title:"牛仔衫永不过时的搭配"},
              {id:5,title:"不容错过的三大艺术博物馆"},
              {id:6,title:"贝嫂的大女人衣柜十周年了"},
              {id:7,title:"史上最皮男团出击男人衣柜"},
              {id:8,title:"泫雅的衣服原来是这么穿！"}
            ]

          }
      }
    }
</script>

<style scoped>
  .newsItem{width:1000px;margin:0 auto;padding: 20px 0;}
  .newsItem:after{display:block;content:"";clear:both;width:0;height:0;}
  .newsItem_left {float:left;width:670px;}
  .top_read {border-bottom:1px solid #999;border-top:1px dashed #999;line-height:24px;}
  .newsItem_title{text-align:center;border-bottom: 1px solid #C0C0C0;font-size:30px;padding:5px;}
  .newsItem_info{text-align:center;font-size:15px;color:#33cccc;}
  .top_info{color:#999;font-size:12px;}
  .article_top span{font-size:15px;background:#C0C0C0;color:white;padding:4px;}
  .article_top p{font-size:12px;}
  .newsItem_content p{font-size:15px;word-wrap:break-word;word-break:break-all;line-height:30px;}
  .newsItem_content img{padding:3px;width:600px;height:auto;border:none;}

  .newsItem_right{float:right;width:250px;border:1px solid #999;padding:5px;}
  .rank_top{font-size:30px;font-family:Serif;border-bottom:1px solid black;text-align:center;}
  #top2{color:red;}
  .rank_ul{list-style-type: none;line-height:25px;font-size:14px;color:#999;}
  .rank_li{padding:5px 0;border-bottom:1px solid #ccc;}
  .rank_index{color:red;}
  .rank_li a:hover{color:red;}


</style>
