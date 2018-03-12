// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/HelloFromVux.vue'

Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Home
}];
const router = new VueRouter({
  routes
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
