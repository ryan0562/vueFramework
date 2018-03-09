<template>
  <section class="mockBox" v-show="mockBoxShow">
    <div class="mockBg" @click.stop="closeMock()"></div>
    <div class="mockMain mockConsole" v-show="mockBoxShow && mockConsoleShow">
      <mt-header title="mock控制台">
        <mt-button slot="right" @click.stop="addMock()">新建</mt-button>
      </mt-header>
      <mt-cell v-for="item in mockList" :key="item.$index" title="标题" label="描述信息" is-link></mt-cell>
    </div>
    <div class="mockMain mockForm" v-if="mockBoxShow && mockFormShow">
      <mt-header title="mockList"></mt-header>
      <mt-field label="标题" placeholder="请输入标题" v-model="mockForm.title"></mt-field>
      <mt-field label="API地址" placeholder="请输入API" v-model="mockForm.url"></mt-field>
      <mt-field label="模板" placeholder="请输入模板内容" v-model="mockForm.template" type="textarea" rows="4"></mt-field>

    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        mockBoxShow: false,
        mockConsoleShow: false,
        mockFormShow: false,
        mockList: [],
        mockForm: {}
      };
    },
    components: {},
    created() {
      this.openMock();
      this.mockFormShow = true;
    },
    methods: {
      addMock: function () {
        this.mockFormShow = true;
      },
      openMock: function () {
        this.mockBoxShow = true;
        this.mockConsoleShow = true;
      },
      closeMock: function () {
        this.mockBoxShow = false;
        this.mockConsoleShow = false;
        this.mockFormShow = false;
      }
    }
  }
</script>
<style lang="scss">
  .mockBox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .mockBg {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }

  .mockMain {
    border: 6px solid #fff;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
  }
</style>
