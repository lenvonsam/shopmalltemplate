<template lang="pug">
  q-modal(ref="cartModal", v-model="canOpen", :no-backdrop-dismiss="true", position="bottom", @close="cb('close')", :content-css="{background: 'transparent', 'padding-top': '10px'}")
    .cart-modal
      .header
        .avatar
          img(src="~assets/quasar-logo-full.svg")
        div(style="padding-bottom: .5rem;padding-left: 4px")
          span 红葡萄酒
          i.material-icons.pull-right(@click="cb('close')") close
        div ￥1233.0
      .body
        .border-bottom-line.ptb
          .pb-10 规格:
          div
            span(style="padding: .1rem .5rem; border: .5px solid #ddd; display: inline-block; border-radius: 2px; color: #888;") 1233
        .row.flex-center.pt-half-rem
          .col
            .pb-10(style="padding-bottom:.5rem;") 购买数量
            div 剩余2000件
          .col.text-right.flex-100
            count-step
      .footer
        .col.join-cart.flex.flex-center
          div 加入购物车
        .col.settle.flex.flex-center
          div 立即购买
</template>

<script>
  import CountStep from '@/CountStep.vue'
  export default {
    props: {
      canOpen: {
        type: Boolean,
        required: true
      },
      cb: {
        type: Function,
        required: true
      }
    },
    watch: {
      canOpen (newVal, oldVal) {
        if (newVal) {
          this.$refs.cartModal.open()
        }
        else {
          this.$refs.cartModal.close()
        }
      }
    },
    components: {
      CountStep
    }
  }
</script>

<style lang="scss", scoped>
  .cart-modal {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    .header,
    .body {
      padding: .5rem .5rem;
    }
    .footer{
      flex: 0 0 50px;
      flex-direction: row;
      display: flex;
      align-items: center;
      .col {
        flex: 1;
        height: 50px;
        color: #fff;
        text-align: center;

        &.join-cart {
          background: #fb8c00;
        }
        &.settle {
          background: #f44336;
        }
        div {
          font-size: 14px;
          letter-spacing: 2px;
        }
      }
    }
    .header {
      flex: 0 0 60px;
      position: relative;
      .avatar {
        position: absolute;
        background: #fff;
        top: -10px;
        border: 1px solid #ddd;
        border-radius: 3px;
        width: 60px;
        height: 60px;
        z-index: 20000;
        left: 15px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border: none;
        }
      }
      border-bottom: .5px solid #ddd;
      padding-left: 85px;
      .title {
        padding-bottom: .5rem;
        padding-left: 4px;
        i {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
</style>
