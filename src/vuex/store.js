import Vue from 'vue'
import Vuex from 'vuex'
import fly from 'flyio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {
    httpRequest ({commit}) {
      // fly.request({
      //   method: 'GET',
      //   baseURL: 'http://web.unionb2b.com/gzql/app/getBanner.shtml'
      // }).then(resp => {
      //   console.log(resp)
      // })
      let formData = new FormData()
      formData.append('reqUrl', 'http://web.unionb2b.com/gzql/app/getBanner.shtml')
      formData.append('type', 'get')
      formData.append('params', '')
      formData.append('charset', 'gbk')
      // const reqBody = {
      //   url: 'getBanner.shtml',
      //   type: 'get',
      //   params: ''
      // }
      // http://wechat.xingyun361.com/quasarserver/ironmart/httpProxy
      fly.post('http://wechat.xingyun361.com/quasarserver/common/proxy', formData).then(resp => {
        console.log(resp)
      })
    }
  }
})
