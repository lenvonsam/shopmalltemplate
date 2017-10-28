<template lang="pug">
  .count-step
    .min.flex-center.flex(@click="minus")
      i.material-icons remove
    .num
      input(v-model="num", @blur="inputBlur")
    .plus.flex-center.flex(@click="add")
      i.material-icons add
</template>

<script>
  export default {
    data () {
      return {
        num: 1
      }
    },
    props: ['value'],
    beforeMount () {
      if (this.value) {
        this.num = this.value
      }
      else {
        this.num = 1
      }
    },
    watch: {
      num (newVal, oldVal) {
        if (newVal.toString().trim().length === 0 || Number(newVal) === 0) {
          this.$emit('input', 1)
        }
        else {
          this.$emit('input', newVal)
        }
      }
    },
    methods: {
      add () {
        this.num++
        this.$emit('input', this.num)
      },
      minus () {
        this.num--
        if (this.num < 1) {
          this.num = 1
        }
        this.$emit('input', this.num)
      },
      inputBlur () {
        console.log(this.num)
        if (this.num.toString().trim().length === 0 || Number(this.num) === 0) {
          this.num = 1
        }
        this.$emit('input', this.num)
      }
    }
  }
</script>

<style lang="scss", scoped>
  .count-step {
    display: flex;
    border: .5px solid #ddd;
    width: 100px;
    height: 24px;
    .min {
      border-right: .5px solid #ddd;
    }
    .plus {
      border-left: .5px solid #ddd;
    }
    .min,
    .plus {
      padding: {
        left: .5rem;
        right: .5rem;
      }
      flex: 0 0 30px;
      font-size: 14px;
      color: #ccc;
    }
    .num {
      flex: 1;
      color: #ccc;
      input {
        width: 100%;
        border: 0px;
        font-size: 10px;
        height: 22px;
        color: #888;
        text-align: center;
      }
    }
  }
</style>
