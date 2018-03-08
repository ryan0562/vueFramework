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
          this.$axios.post('/api/loan/person/mobile/detect', {mobile: 15397191444})
            .then(() => {
              console.log('成功')
            })
            .catch(() => {
              console.log('失败')
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
