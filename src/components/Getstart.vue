<template>
<main>
  <header>主页 / 新手入门</header>
  <div>
    <h1>Node.js 入门</h1>
    <h2>《快速搭建 Node.js 开发环境以及加速 npm》</h2>
    <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
    <h2>《Node.js 包教不包会》</h2>
    <a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a>
    <h2>《ECMAScript 6入门》</h2>
    <a href="http://es6.ruanyifeng.com">http://es6.ruanyifeng.com/</a>
    <h2>《七天学会NodeJS》</h2>
    <a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a>
    <h1>Node.js 资源</h1>
    <h2>《前端资源教程》</h2>
    <a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a>
    <h2>《国内的 npm 镜像源》</h2>
    <a href="http://cnpmjs.org/">http://cnpmjs.org/</a>
    <h2>《node weekly》</h2>
    <a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a>
    <h2>《node123-node.js中文资料导航》</h2>
    <a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a>
    <h2>《A curated list of delightful Node.js packages and resources》</h2>
    <a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a>
    <h2>《Node.js Books》</h2>
    <a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a>
    <h1>Node.js 名人</h1>
    <h2>《名人堂》</h2>
    <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">https://github.com/cnodejs/nodeclub/wiki/名人堂</a>
    <h1>Node.js 服务器</h1>
    新手搭建 Node.js 服务器，推荐使用无需备案的DigitalOcean(<a href="https://www.digitalocean.com/">https://www.digitalocean.com/</a>)
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
      margin:20px 0
    }
    h1::after{
      content: "";
      display: block;
      height: 1px;
      background-color: #E1E1E1;
      margin-top:5px;
    }
    h2,a{
      margin: 15px 0;
      font-size: 16px;
    }
    a{
      color:#0088cc
    }
</style>
