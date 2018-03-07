<template>
  <div class="fineBorder">

  </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        created: function () {
        },
        components: {},
        methods: {}
    }
</script>
<style lang="scss">
.fineBorder {
  position: relative;
  height: 300px;
  &:before{
    content: " ";
    width: 100%;
    height: 1px; /*no*/
    background: #ccc;
    position: absolute;
    bottom:0;
    transform: scaleY(.5);
  }
}
</style>
