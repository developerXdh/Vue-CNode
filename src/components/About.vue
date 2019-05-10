<template>
<main>
  <header><router-link :to = "{name:'root'}">主页</router-link> / 关于</header>
  <div class='about'>
    <div>
      <h1 class='title'>关于项目</h1>
      <p>该项目是基于Cnodejs的api，采用vue.js重写的web。</p>
    </div>
    <div>
      <h1 class='title'>源码地址</h1>
      <a href='https://github.com/developerXdh/Vue-CNode'>https://github.com/developerXdh/Vue-CNode</a>
    </div>
    <div>
      <h1 class='title'>联系作者</h1>
      <p>咸蛋黄：<a href='mailto:zhaozy086@163.com'>zhaozy086@163.com</a></p>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
      background-color: #F6F6F6;
      padding: 15px 25px;
      color:#999999
    }
    .about{
      padding: 10px 25px 30px 25px;
      background-color: white
    }
    .title{
      font: 20px bolder;
      margin:30px 0
    }
    h1::after{
      content: "";
      display: block;
      height: 2px;
      background-color: #DCDCDC;
      margin-top:10px;
    }

</style>
