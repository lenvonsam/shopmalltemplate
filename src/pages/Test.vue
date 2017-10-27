<template lang="pug">
  q-layout
    q-toolbar(slot="header",view="hHr LpR lFf", color="red-5")
      q-toolbar-title.text-center 测试
    .layout-view
      div(style="padding-top: 100px;")
        button(@click="test") 123
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'httpRequest'
      ]),
      test () {
        this.httpRequest()
      }
    }
  }
</script>

<style scoped>
  .auto {
    flex: 1;
  }
</style>
