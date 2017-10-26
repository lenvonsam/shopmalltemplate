<template lang="pug">
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

</style>
