import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'

// Import views
import HomePage from './views/HomePage.vue'

// Create router
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

// Create and mount the Vue application
const app = createApp(App)

// Use plugins
app.use(router)
app.use(store)

// Mount the app
app.mount('#app')