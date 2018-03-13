<template>
  <section class="mockBox" v-show="mockConsoleShow">
    <div class="mockBg" @click.stop="closeMock()"></div>
    <div class="mockMain mockConsole">
      <mt-header title="mock控制台">
        <label slot="left"><input type="checkbox" class="checkbox" v-model="mockList.checked"
                                  @click="setAll(mockList.checked)">启用</label>
        <mt-button slot="right" @click.stop="openMockForm()">新建</mt-button>
      </mt-header>
      <div class="mockCon">
        <mt-cell v-for="item in mockList.main" :key="item.$index" :title="item.title" :label="item.url"
                 @click.native="mockEdit(item)">
          <i class="icon-remove" @click.stop="mockDel(item.url)"></i>
          <input type="checkbox" slot="icon" class="checkbox" @click.stop="">
        </mt-cell>
      </div>
    </div>
    <div class="mockMain mockForm" v-if="mockFormShow">
      <mt-header title="mockList"></mt-header>
      <div class="mockCon">
        <label class="mint-cell-wrapper">
          <span class="labelTit">启用</span>
          <input type="checkbox" class="checkbox" v-model="mockForm.checked">
        </label>
        <mt-field label="标题" placeholder="请输入标题" v-model="mockForm.title"></mt-field>
        <mt-field label="API" placeholder="请输入接口地址" v-model="mockForm.url"></mt-field>
        <div class="mockTextarea">
          <textarea placeholder="请输入模板" v-model="mockForm.template"></textarea>
          <mt-button size="small" type="primary" @click="addMock()">确定</mt-button>
          <mt-button size="small" type="primary" @click="closeMockForm()">取消</mt-button>
        </div>
      </div>


    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        mockConsoleShow: false,
        mockFormShow: false,
        mockList: {
          checked: true,
          main: {}
        },
        mockForm: {
          checked: true,
        },
      };
    },
    components: {},
    created() {
      if (localStorage.getItem('mock')) {
        this.getLocalStorage();
      } else {
        localStorage.setItem('mock', JSON.stringify(this.mockList));
      }
    },
    methods: {
      //盒子
      openMock: function () {
        this.mockConsoleShow = true;
      },
      closeMock: function () {
        this.mockConsoleShow = false;
      },
      //表单
      openMockForm: function () {
        this.mockFormShow = true;
        this.resetMockForm();
      },
      closeMockForm: function () {
        this.mockFormShow = false;
      },
      resetMockForm: function () {
        this.mockForm = {
          checked: true,
        };
      },
      addMock: function () {
        if (!this.mockForm.url || !this.mockForm.title) {
          this.$toast('标题跟API必填');
          return
        }
        let mock = localStorage.getItem('mock');
        mock = JSON.parse(mock);
        mock.main[this.mockForm.url] = this.mockForm;
        localStorage.setItem('mock', JSON.stringify(mock));
        //获取缓存并返回列表
        this.getLocalStorage();
        this.closeMockForm();
      },
      mockEdit: function (form) {
        this.openMockForm();
        this.mockForm = form;
      },
      getLocalStorage: function () {
        this.mockList = JSON.parse(localStorage.getItem('mock'));
      },
      mockDel: function (url) {
        delete this.mockList.main[url];
        localStorage.setItem('mock', JSON.stringify(this.mockList));
        this.$forceUpdate();
      },
      setAll: function (val) {
        this.mockList.checked = !val;
        localStorage.setItem('mock', JSON.stringify(this.mockList));
      },
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
    .labelTit {
      width: 60px;
    }
    .checkbox {
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
    .mint-cell-title {
      width: 60px;
    }
    .mint-cell {
      min-height: 40px;
    }
    .mockTextarea {
      padding: 0 10px;
      font-size: 16px;
      textarea {
        width: 100%;
        height: 200px;
        border: 1px solid #ccc;
      }
    }
  }

  .mockCon {
    padding: 10px 0;
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
    overflow: auto;
    height: 410px;
    width: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
  }

  .mockConsole {
    height: auto;
    max-height: 410px;
  }
</style>
