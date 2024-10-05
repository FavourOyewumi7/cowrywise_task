import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ImageView from './components/imageview.vue'
import ModalView from './components/modal.vue'

createApp(App).component('ImageView', ImageView).component('ModalView', ModalView).use(router).mount('#app')
