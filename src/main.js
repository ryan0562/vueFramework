// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
//px转rem 源码修改过,不要用依赖库里的
import 'src/common/flexible.js'
//全局重定义样式
import 'src/common/reset.scss'
import 'src/common/common.scss'
//mintUi框架
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
//axios
import axios from 'axios'
// 格式化数据
axios.defaults.transformRequest.push(function (data, headers) {
  if (headers['Content-Type'] === 'application/json;charset=utf-8') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(JSON.parse(data));
  }
  return data;
});
//引入mockjs//模拟API返回数据
// import mock from 'mockjs'



Vue.config.productionTip = false;

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
//axios加入vue原型方便全局使用
Vue.prototype.$axios = axios;
