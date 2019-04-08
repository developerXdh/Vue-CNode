<template>
<div class="UserInfo">
  <vue-headful
    :title="userinfo.loginname"
  />
  <div class="loading" v-if="isLoading">
    <img src="../assets/loading.gif" >
  </div>
  <div class="userInfomation" v-else>
    <header>主页 /</header>
    <section>
      <img :src="userinfo.avatar_url" >
      <span class="id">{{userinfo.loginname}}</span>
      <p>{{userinfo.score}}积分</p>
      <p>注册时间：{{userinfo.create_at | formatDate}}</p>
    </section>
    <div class="replies">
      <p>回复的主题</p>
      <ul>
        <li v-for="item in userinfo.recent_replies">
          <router-link :to="{name:'post_content',params:{id:item.id}}">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="topics">
      <p>创建的主题</p>
      <ul>
        <li v-for="item in userinfo.recent_topics">
          <router-link :to="{name:'post_content',params:{id:item.id}}">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "UserInfo",
  data(){
      return {
        isLoading:false,
        userinfo:{}
      }
  },
  methods:{
      getData(){
          this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then(res=>{
              this.isLoading = false;
              this.userinfo = res.data.data;
            })
            .catch(function (err) {
              console.log(err)
            })
      }
  },
  beforeMount(){
    this.isLoading = true;
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading {
    text-align: center;
    padding-top: 200px;
  }
  header{
      background-color: #F6F6F6;
      padding: 15px 15px;
      color:#999999
    }
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation section p{
    color:#999999;
    margin: 5px 0
  }
  .userInfomation img {
    width: 40px;
    vertical-align:middle;
  }
  .id {
    vertical-align:middle;
    color:#999999
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
  .userInfomation > div >ul > li > a::after{
      content: "";
      display: block;
      height: 1px;
      background-color: #F8F7F7;
      margin-top:5px;
    }
  .replies p,.topics p{
    font-size: 14px !important;
    color:#999999
  }
</style>
