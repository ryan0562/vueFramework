<template>
  <div id="app">
    <router-view/>
    <mock ref="mock"></mock>
  </div>
</template>

<script>
  import mock from 'src/common/mock/mockConsole.vue'
export default {
  name: 'App',
  components: {
    mock,
  },
  created() {
    //为什么不添加到#app上,是因为部分#APP小于屏幕,点击APP外的部分无法触发//@click.ctrl.alt
    document.addEventListener('click', event => {
      if (event.ctrlKey && event.altKey) {
        this.showMock();
      }
    });
  },
  methods: {
    showMock: function () {
      this.$refs.mock.openMock();
    },
  },
}
</script>

<style>

</style>
