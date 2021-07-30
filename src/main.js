import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import '@/assets/style/flex.css'
import 'element-plus/lib/theme-chalk/index.css'
import http from '@/http/index'



let app = createApp(App)
app.use(router)
app.use(ElementPlus)

// 替代vue2中的 vm.prototype.xxx
app.config.globalProperties.$http = http


app.mount('#app')
