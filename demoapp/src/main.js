import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Import CSS Gobal
import "@/assets/style.css"

createApp(App).use(store).use(router).mount('#app')