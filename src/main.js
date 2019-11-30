import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import {
  MessageBox,
  Message,
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/base.less'
import './assets/less/default.less'
import './lib/icon/iconfont.css'

Vue.config.productionTip = false

// Vue.use(MessageBox)
// Vue.use(Message)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
Vue.prototype.$axios = axios

Vue.filter('dateFormat', date => {
  return moment(date).format('YYYY-MM-DD')
})

Vue.filter('dateFormatSeconds', date => {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
