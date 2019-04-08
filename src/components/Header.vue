<template>
  <header>
    <router-link :to = "{name:'root'}">
      <img src="..\assets\cnodejs_light.svg" alt="cnodeLogo">
    </router-link>
    <ul>
      <li><router-link :to = "{name:'root'}">首页</router-link></li>
      <li><router-link :to = "{name:'getstart'}">新手入门</router-link></li>
      <li><router-link :to = "{name:'about'}">关于</router-link></li>
      <li><router-link :to = "{name:'null'}">注册</router-link></li>
      <li><router-link :to = "{name:'null'}">登录</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{background-color: #444444;padding:10px 80px;}
    img{max-width: 120px;height:30px;float:left;}
    header::after{display:block;clear:both;content:""}
    ul{float:right;}
    li{display:inline-block;}
    a{color:#E1E1E1;margin:0 10px;line-height:30px}
</style>
