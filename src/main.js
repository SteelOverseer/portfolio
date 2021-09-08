import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import AboutMe from './components/AboutMe'
import WorkHistory from './components/WorkHistory'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/About'
    },
    {
      path: '/About',
      name: 'about',
      component: AboutMe
    },
    {
      path: '/WorkHistory',
      name: 'workHistory',
      component: WorkHistory
    }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
