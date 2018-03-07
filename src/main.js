// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//px转rem 源码修改过,不要用依赖库里的
import 'src/common/flexible.js'
//全局重定义样式
import 'src/common/reset.scss'
//mintUi框架
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
