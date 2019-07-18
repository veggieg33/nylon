<template>
<div class="carousel">
  <div class="row">

    <div class="col"></div>
    <div class="col">
      <div  id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1" ></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/static/image/carousel1.jpg">
            <div class="carousel-caption">
              <h3>小长假打破次元壁</h3>
              <p>跟着电影去旅行</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/static/image/carousel2.jpg">
            <div class="carousel-caption">
              <h3>时尚圈里最懂美妆</h3>
              <p>美妆圈里最懂生活</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/static/image/carousel3.jpg">
            <div class="carousel-caption">
              <h3>学欧阳娜娜穿搭</h3>
              <p>春夏季更可爱</p>
            </div>
          </div>
        </div>
        <a href="#demo" class="carousel-control-prev" data-slide-to="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#demo" class="carousel-control-next" data-slide-to="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
  </div>
    <div class="col"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "carousel"
    }
</script>

<style scoped>
h3,p{font-family: serif;}
</style>
