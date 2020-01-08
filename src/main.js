import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Input, Row, Col, Form } from 'ant-design-vue'
Vue.prototype.$form = Form

// 引入ant design的公共组件
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => {
    return h(App)
  }
}).$mount('#app')
