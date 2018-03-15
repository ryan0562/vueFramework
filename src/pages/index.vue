<template>
  <div class="border-right">
  </div>
</template>
<script>
    export default {
        data() {
          return {
            text: '这里是一个小文本!'
          };
        },
        created: function () {
          this.$axios.post('/a', {mobile: 15397191444})
            .then(res => {
              console.log('成功',res)
            })
            .catch(res => {
              console.log('失败',res)
            })
        },
        components: {},
      methods: {}
    }
</script>
<style lang="scss">
.border-right {
  position: relative;
}
</style>
