// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar, { QLayout, QToolbar, QToolbarTitle, QTabs, QRouteTab, QGalleryCarousel, QIcon, QCard, QCardTitle, QCardMedia, QCardActions, QBtn, QParallax, QChip, QModal } from 'quasar'
import router from './router'
import store from './vuex/store'
import mixins from './mixins'

Vue.config.productionTip = false
Vue.use(Quasar, {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QGalleryCarousel,
    QIcon,
    QCard,
    QCardMedia,
    QCardTitle,
    QCardActions,
    QBtn,
    QParallax,
    QChip,
    QModal
  }
}) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
Vue.mixin(mixins)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App').default)
  })
})
