import Vue from 'vue'
import Router from 'vue-router'
import mintIndex from 'src/pages/mintUi/demos.vue'
import mintApp from 'src/pages/mintUi/app.vue'
import mintDemo from 'src/pages/mintUi/route'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('src/pages/index.vue'),
    },
    {
      path: '/demo',
      component: mintIndex,
    },
    {
      path: '/app',
      component: mintApp,
      children:mintDemo,
    },
    {
      path: '*',
      component: {
        template: '<p>不好意思！程序员开小差了把页面弄丢了！！</p>',
      }
    }
  ]
})
