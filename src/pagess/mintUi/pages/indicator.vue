<template>
  <div class="page-indicator">
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <mt-button @click.native="openIndicator" size="large">点击弹出 Indicator</mt-button>
      <mt-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</mt-button>
      <mt-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</mt-button>
    </div>
  </div>
</template>

<style lang="scss">

    .page-indicator {
      .page-indicator-wrapper {
        padding: 0 20px;
        top: 50%;    position: absolute;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
</style>

<script type="text/babel">

  export default {
    methods: {
      openIndicator() {
        this.$indicator.open();
        setTimeout(() => this.$indicator.close(), 2000);
      },

      openIndicatorWithSpinner() {
        this.$indicator.open({ spinnerType: 'fading-circle' });
        setTimeout(() => this.$indicator.close(), 2000);
      },

      openIndicatorWithText() {
        this.$indicator.open('加载中...');
        setTimeout(() => this.$indicator.close(), 2000);
      }
    },

    beforeDestroy() {
      this.$indicator.close();
    }
  };
</script>
