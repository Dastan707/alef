import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Preview from '../components/Preview.vue'
import Form from '../components/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  }
]

const router = new VueRouter({
  routes
})

export default router
