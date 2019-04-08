<template>
<div class="PostList">
  <vue-headful
    title="CNode"
  />
  <div class="loading" v-if="isLoading">
    <img src="..\assets\loading.gif" alt="loading">
  </div>
  <main class="posts" v-else>
    <ul>
      <li>
        <div class="toobar">
          <span @click = 'selectCategory'>全部</span>
          <span @click = 'selectCategory'>精华</span>
          <span @click = 'selectCategory'>问答</span>
          <span @click = 'selectCategory'>分享</span>
          <span @click = 'selectCategory'>招聘</span>
        </div>
      </li>
      <li v-for="post in posts">
        <router-link :to="{name:'user_info',params:{name:post.author.loginname}}"><img :src="post.author.avatar_url"></router-link>
        <span class="allcount"><span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}</span>
        <span :class="[{put_good:(post.good === true),put_top:(post.top === true),topiclist_tab:(post.good !== true&&post.top !== true)}]">{{post | tabFormatter}}</span>
        <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
          <span>{{post.title}}</span>
        </router-link>
        <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
      </li>
      <li>
        <Pagination @handleList="renderList"></Pagination>
      </li>
    </ul>
  </main>
</div>
</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'Postlist',
  data(){
    return {
        isLoading:"",
        posts:[],
        postpage:1,
        category: ""
      }
  },
  components:{
    Pagination
  },
  methods: {
      getData(){
         this.$axios.get('https://cnodejs.org/api/v1/topics',{params:{limit:20,page:this.postpage,tab:this.category}}).
         then(res=>{
             this.isLoading = false
             this.posts = res.data.data;
         }).
         catch(err=>{
             console.log(err)
         })
      }, 
      renderList(value){
          this.postpage = value;
          this.getData();
      },
      selectCategory(event){
        this.sb = false
        switch (event.currentTarget.innerText) {
          case '全部':
            this.category = ""
            this.getData()
            break;
          case '精华':
            this.category = "good"
            this.getData()
            break;
          case '问答':
            this.category = "ask"
            this.getData()
            break;
          case '分享':
            this.category = "share"
            this.getData()
            break;
          case '招聘':
            this.category = "job"
            this.getData()
            break;
          default:
            break;
        }
      }
    },
  beforeMount(){
        this.isLoading = true
        this.getData()
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .PostList{
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 10px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist_tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>
