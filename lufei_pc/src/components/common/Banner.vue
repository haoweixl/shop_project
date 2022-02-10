<template>
  <div class="banner">
      <el-carousel trigger="click" height="473px">
        <el-carousel-item v-for="banner in banner_list">
          <a :href="banner.link"><img width="100%" :src="banner.img" alt=""></a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      banner_list: [
        {link: 'http://www.baidu.com', img: '/static/banner/1.png'},
        {link: 'http://www.baidu.com', img: '/static/banner/2.png'},
        {link: 'http://www.baidu.com', img: '/static/banner/3.png'}
      ]
    }
  }
}
</script>

<style>
.el-carousel__arrow{
  width: 100px!important;
  height: 100px!important;
}
.el-icon-arrow-left{
  font-size: 35px;
  margin-left: 50px;
}
.el-carousel__arrow--left{
  left: -50px;
}
</style>
