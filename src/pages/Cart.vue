<template lang="pug">
  .cart-container
    .cart-content
      .cart-content-wrapper
        .cart-scroll
          .cart-item
            .row.padding.border-bottom-line
              .col.flex-30.flex.flex-center
                img(src="~assets/imgs/btn_ck_h.png", style="width: 16px;")
              .col 美味葡萄酒
              .col.text-right
                q-icon(name="delete",size="1.2rem", style="color: #888")
            .row.padding
              .col.flex-30
              .col.flex-100.flex.flex-center
                img(src="~assets/imgs/ic_wuliu.png", style="width: 70px;")
              .col
                .ptb
                  span 750ml*1瓶
                  span 礼盒装
                .ptb.row.flex-center
                  .col ￥79
                  .col
                    count-step(v-model="item")
          .cart-item
            .row.padding.border-bottom-line
              .col.flex-30.flex.flex-center
                img(src="~assets/imgs/btn_ck_h.png", style="width: 16px;")
              .col 美味葡萄酒
              .col.text-right
                q-icon(name="delete",size="1.2rem", style="color: #888")
            .row.padding
              .col.flex-30
              .col.flex-100.flex.flex-center
                img(src="~assets/imgs/ic_wuliu.png", style="width: 70px;")
              .col
                .ptb
                  span 750ml*1瓶
                  span 礼盒装
                .ptb.row.flex-center
                  .col ￥79
                  .col
                    count-step(v-model="item")
    .cart-footer(slot="footer")
      .row.flex-center.padding(@click="choosedAll")
        .flex.flex-center
          img(src="~assets/imgs/btn_ck_h.png",v-if="allChoosed", style="width: 16px")
          img(src="~assets/imgs/btn_ck_n.png",v-else, style="width: 16px")
        .pl-5 全选
      .col.cart-footer-col
        div.text-right
          span 合计：
          span ￥ 0
        //- div.text-right 共{{totalCount}}件
        .text-right 总重: 0
      .col.cart-settle-btn(@click="goToSettle")
        .ft-20 结算
</template>

<script>
  import CountStep from '@/CountStep.vue'
  export default {
    data () {
      return {
        allChoosed: false,
        item: 2
      }
    },
    components: {
      CountStep
    },
    methods: {
      goToSettle () {
        console.log(this.item)
        // Dialog.create({title: 'xxx'})
      },
      choosedAll () {

      }
    }
  }
</script>

<style lang="scss", scoped>
  .cart-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .cart-content {
      flex: 1;
      // overflow: hidden;
      position: relative;
      .cart-content-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .cart-scroll {
          overflow: auto;
          flex: 1;
          .cart-item {
            background: #fff;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
    .cart-footer {
      flex: 0 0 50px;
      background:#fff;
      display:flex;
      color:#333;
      font-size: 14px;
      border-top: 0.5px solid #ddd;
      .cart-footer-col {
        flex-direction:column;
        align-items:center;
        align-self: center;
        padding-right:8px;
      }
      .cart-settle-btn {
        display:flex;
        background:#fe5363;
        align-items:center;
        color:#fff;
        justify-content:center;
      }
    }
  }



</style>
