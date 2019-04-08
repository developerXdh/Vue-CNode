<template>
<main>
  <header>主页 / 关于</header>
  <div>
    <h1>关于</h1>
    <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
    <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
    <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
    <p>社区目前由 <router-link :to="{name:'user_info',params:{name:'alsotang'}}">@alsotang</router-link> 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a></p>
    <p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p>
    <h1>移动客户端</h1>
    <p>客户端由 <router-link :to="{name:'user_info',params:{name:'soliury'}}"><a>@soliury</a></router-link> 开发维护。<p>
    <p>源码地址：<a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native 。</a></p>
    <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
    <p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
    <h1>LOGO</h1>
    <p>白底： <a href="https://cnodejs.org/public/images/cnodejs.svg">/public/images/cnodejs.svg</a></p>
    <p>黑底： <a href="https://cnodejs.org/public/images/cnodejs_light.svg">/public/images/cnodejs_light.svg</a></p>
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
      padding: 15px 20px;
      color:#999999
    }
    div{
      padding: 10px 25px 30px 25px;
      background-color: white
    }
    h1{
      font: 25px bolder;
      margin:30px 0
    }
    h1::after{
      content: "";
      display: block;
      height: 1px;
      background-color: #E1E1E1;
      margin-top:5px;
    }
    p,a{
      margin: 15px 0;
      font-size: 15px;
    }
    a{
      color:#0088cc
    }
</style>
