// core 
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// css
import '@/assets/tool.css'
import './global-style.css'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
