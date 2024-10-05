import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ImageView from './components/imageview.vue'

createApp(App).component('ImageView', ImageView).use(router).mount('#app')
