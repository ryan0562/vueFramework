<template>
  <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <div class="page-datetime-wrapper">
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
      <mt-button @click.native="open('picker4')" size="large">自定义模板</mt-button>
      <mt-button @click.native="open('picker5')" size="large">设定初始值</mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="value"
      :closeOnClickModal="false"
      @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value2"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<style lang="scss">

  .page-datetime {
    .page-datetime-wrapper {
      padding: 0 20px;
      top: 50%;
      position: absolute;
      width: 100%;
      transform: translateY(-50%);
    }
  }
</style>

<script type="text/babel">

  export default {
    data() {
      return {
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>
