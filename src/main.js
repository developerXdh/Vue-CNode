// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Axios from 'Axios'
import vueHeadful from 'vue-headful'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
Vue.component('vue-headful', vueHeadful);

router.beforeEach((to, from, next) => {
  let getFlag = localStorage.getItem("Flag");
  if(getFlag === "isLogin"){
    store.state.isLogin = true
    next()
  }else{
    if(to.meta.isLogin){
      next({
        path: '/login',
      })
    }else{
      next()
    }
  }
})

Vue.filter('formatDate', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}
)
//处理显示板块的文字
Vue.filter('tabFormatter',function (post) {
  if(post.good){
    return '精华'
  }else if(post.top){
    return '置顶'
  }else if(post.tab === 'ask'){
    return '问答'
  }else if(post.tab === 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})