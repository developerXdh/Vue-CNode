<template>
<div>
  <header><router-link :to = "{name:'root'}">主页</router-link> / 登录</header>
  <div class='login'>
    <input placeholder='Access Token' v-model=accessToken>
    <button @click='login'>登　录</button>
    <p>{{error}}</p>
    <p>可使用测试Access Token：50b78e1d-cf09-40d5-8c3a-d720a4aab84a</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      accessToken:'',
      error:'提示：用户登录CNode官网后，在设置页面可以看到自己的 accessToken。'
    }    
  },
  methods: {
    login(){
      this.$axios.post("https://cnodejs.org/api/v1/accesstoken", {accesstoken:this.accessToken})
      .then(res => {
        localStorage.setItem('Flag', 'isLogin')
        localStorage.setItem('CnodeId', res.data.loginname)
        this.$store.state.isLogin = true
        this.$router.push("/")
      })
      .catch(err => {
        this.error = '登陆失败'
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
      background-color: #F6F6F6;
      padding: 15px 25px;
      color:#999999
    }
  .login{
    background-color: white;
    padding: 50px;
    text-align: center
  }
  input{
    font-size: 16px;
    text-align: center;
    width: 100%;
    padding:10px;
    border: none;
    border-bottom:1px solid #DCDCDC
  }
  button{
    background-color: white;
    border: 1px solid black;
    font-size: 16px;
    padding: 3px 10px;
    margin-top: 30px;
    border-radius: 3px;
  }
  p{
    margin-top: 50px;
    color:red
  }
</style>
