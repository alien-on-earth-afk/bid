import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'


import HomePage from './views/HomePage.vue'

const router = createRouter({
  history: createWebHistory('/bid/'),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')