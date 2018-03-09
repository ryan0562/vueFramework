<template>
  <div>
    <a class="page-back" href="javascript:history.back(-1);">
      <i class="mintui mintui-back"></i>
    </a>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }

  .page-back {
    display: inline-block;
    top: 12px;
    left: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

<script type="text/babel">
  import 'mint-ui/src/assets/font/iconfont.css';

  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    },
  };
</script>
