<template>
<div>
  <header><router-link :to = "{name:'root'}">主页</router-link> / 登录</header>
  <div class='login'>
    <input placeholder="Access Token">
    <button>登　录</button>
  </div>
</div>
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
</style>
