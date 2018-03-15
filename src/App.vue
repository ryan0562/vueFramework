<template>
  <div id="app">
    <router-view/>
    <mock ref="mock"></mock>
  </div>
</template>

<script>
  import 'src/common/mock/mock';
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    mock:()=>  import('src/common/mock/mockConsole.vue')
  },
  created() {
    //为什么不添加到#app上,是因为部分#APP小于屏幕,点击APP外的部分无法触发//@click.ctrl.alt
    //生产环境不显示
    if (process.env.NODE_ENV !== 'production') {
      document.addEventListener('click', event => {
        if (event.ctrlKey && event.altKey) {
          this.$refs.mock.openMock();
        }
      });
    }
  },
}
</script>

<style>

</style>
