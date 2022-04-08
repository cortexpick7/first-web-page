import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'
import './assets/styles/style.scss'
import VueObserveVisibility from 'vue-observe-visibility'

createApp(App).use(router, VueObserveVisibility).mount('#app')
