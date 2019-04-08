import Vue from 'vue'
import Router from 'vue-router'
import Postlist from '../components/Postlist'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Getstart from '../components/Getstart'
import About from '../components/About'
import Null from '../components/Null'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main: Postlist
      },
      meta:{
        title:'CNode'
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author:name',
      components:{
        main: Article,
        slidebar:SlideBar
      },
      meta:{
        title:'CNode'
      }
    },
    {
      name: 'user_info',
      path: '/user_info/:name',
      components:{
        main: UserInfo
      }
    },
    {
      name: 'getstart',
      path: '/getstart',
      components:{
        main: Getstart
      }
    },
    {
      name: 'about',
      path: '/about',
      components:{
        main: About
      }
    },
    {
      name: 'null',
      path: '/null',
      components:{
        main: Null
      }
    }
  ]
})
