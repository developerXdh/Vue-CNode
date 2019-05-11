<template>
  <header>
    <router-link :to = "{name:'root'}">
      <img src="..\assets\cnodejs_light.svg" alt="cnodeLogo">
    </router-link>
    <ul>
      <li><router-link :to = "{name:'root'}">首页</router-link></li>
      <li v-if='this.$store.state.isLogin' @click='logout'>注销</li>
      <li v-else><router-link :to = "{name:'login'}">登录</router-link></li>
      <li><router-link :to = "{name:'me',params:{name:this.loginId}}">我的主页</router-link></li>
      <li><router-link :to = "{name:'about'}">关于</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      loginId:localStorage.getItem('CnodeId')
    }
  },
  methods: {
    logout(){
      this.$store.state.isLogin = false
      localStorage.removeItem("Flag")
      localStorage.removeItem("CnodeId")
      this.$router.push("/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{background-color: #444444;padding:10px 80px;}
    img{max-width: 120px;height:30px;float:left;}
    header::after{display:block;clear:both;content:""}
    ul{float:right;}
    li{display:inline-block;color:#e1e1e1;cursor: pointer;}
    a{color:#E1E1E1;margin:0 10px;line-height:30px}
</style>
