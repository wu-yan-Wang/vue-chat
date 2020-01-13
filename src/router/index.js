import Login from '@/pages/login'
import Chat from '@/pages/chat'
import { BasicLayout } from '@/layout'
import VueRoute from 'vue-router'
import Vue from 'vue'

Vue.use(VueRoute)

const routes = [{
  path: '/login',
  component: Login
},
{
  path: '/',
  component: BasicLayout
},
{
  path: '/chat',
  name: 'chat',
  component: Chat
}
]

const router = new VueRoute({
  routes
})
export default router
