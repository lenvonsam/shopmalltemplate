<template lang="pug">
  div
    q-gallery-carousel(:src="gallery",autoplay, dots, infinite)
    .row.text-center
      .col
        q-icon(name="apps", size="2.5rem")
        div 所有商品
      .col(@click="test")
        q-icon(name="fiber_new", size="2.5rem")
        div 新品上市
      .col
        q-icon(name="card_giftcard", size="2.5rem")
        div 特惠商品
    div(style="background:#fff;")
      q-card
        q-card-media
          img(src="~assets/quasar-logo-full.svg")
          //- q-parallax(:src="'http://web.unionb2b.com/webpage/gzql/for-etrade/images/mobile/banner1.jpg'", :height="100")
            div(slot="loading") 加载中...
          q-card-title(slot="overlay") 欧洲法葡
        q-card-actions
          .row.flex.flex-center(style="width:100%;")
            .col
              q-btn(flat, color="red-5") ￥129.9
            .col.text-right
              q-chip(pointing="left", color="red-5", small, style="font-size: 12px;") 马上购
      .row
        .col
          q-card
            q-card-media
              img(src="~assets/quasar-logo-full.svg")
            q-card-title 123
        .col
          q-card
            q-card-media
              img(src="~assets/quasar-logo-full.svg")
            q-card-title 456
            q-card-actions
              .row.full-width
                .col
                  q-btn(flat) 123
                .col.text-right
                  q-btn(flat, @click="cartModalOpen = !cartModalOpen") 点我
    cart-modal(:canOpen="cartModalOpen", :cb="cartModalCb")

</template>

<script>
  import CartModal from '@/CartModal.vue'
  export default {
    data () {
      return {
        gallery: ['http://web.unionb2b.com/webpage/gzql/for-etrade/images/mobile/banner1.jpg', 'http://web.unionb2b.com/webpage/gzql/for-etrade/images/mobile/banner2.jpg'],
        cartModalOpen: false
      }
    },
    components: {
      CartModal
    },
    methods: {
      test () {
      },
      cartModalCb (obj) {
        this.cartModalOpen = false
      }
    }
  }
</script>

<style lang="scss", scoped>

</style>
