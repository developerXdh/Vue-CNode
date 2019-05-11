<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  created(){
    let getFlag = localStorage.getItem("Flag");
    if(getFlag === "isLogin"){
      this.$store.state.isLogin = true
    }
  }
}
</script>

<style>
  @import url('./assets/markdown-github.css');
  *{padding:0;margin:0;font-size:14px;-webkit-text-size-adjust: none;}
  ul,li{list-style: none}
  a{text-decoration: none}
  body{background-color: #E1E1E1}
  .main{max-width: 80%;margin: 20px auto}
</style>
