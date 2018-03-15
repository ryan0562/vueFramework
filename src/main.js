// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'
//px转rem 源码修改过,不要用依赖库里的
import 'src/common/flexible.js'
//全局重定义样式
import 'mint-ui/lib/style.css'
import 'src/common/reset.scss'
import 'src/common/common.scss'

import 'static/Font-Awesome-3.2.1/css/font-awesome.min.css'
//mintUi框架
import Mint from 'mint-ui';
Vue.use(Mint);

//axios
import axios from 'axios'
//请求拦截器并返回模拟数据
// import 'src/common/mock/mock'


//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个返回拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


// 格式化数据
axios.defaults.transformRequest.push(function (data, headers) {
  if (headers['Content-Type'] === 'application/json;charset=utf-8') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(JSON.parse(data));
  }
  return data;
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
//axios加入vue原型方便全局使用
Vue.prototype.$axios = axios;
